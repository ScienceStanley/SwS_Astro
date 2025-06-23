# AI-Powered Visual Asset Generation System for Smarter with Science

## System Architecture for Generative AI Image Integration

### 1. **Prompt Tagging System**

Create a standardized markdown format for image placeholders throughout the codebase:

```markdown
<!-- IMAGE_PROMPT[hero-banner-main]
Style: Cyberpunk scientific laboratory with holographic displays
Mood: Futuristic, inspiring, purple and blue color scheme
Elements: DNA helixes, neural networks, collaborative scientists
Dimensions: 1920x600
Variations: 3
-->

<!-- IMAGE_PROMPT[science-stanley-avatar]
Character: Friendly AI scientist character, mix of human and digital elements
Style: Pixar-meets-cyberpunk, approachable but futuristic
Colors: Purple gradient skin, glowing blue eyes, white lab coat with digital patterns
Pose: Welcoming gesture, holding holographic molecule
Dimensions: 512x512
Variations: 5
-->

<!-- IMAGE_PROMPT[project-card-bg-{category}]
Abstract background for {category} projects
Style: Geometric patterns suggesting {category} concepts
Colors: Gradient using SwS brand colors
Overlay: Semi-transparent for text readability
Dimensions: 400x300
Variations: 2
Categories: health, climate, education, community, food
-->
```

### 2. **Directory Structure for Visual Assets**

```
smarter-with-science/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── generated/
│   │   │   │   ├── hero-banner-main/
│   │   │   │   │   ├── v1_timestamp.png
│   │   │   │   │   ├── v2_timestamp.png
│   │   │   │   │   ├── v3_timestamp.png
│   │   │   │   │   └── selected.png
│   │   │   │   ├── science-stanley-avatar/
│   │   │   │   └── ...
│   │   │   ├── prompts/
│   │   │   │   ├── hero-banner-main.json
│   │   │   │   └── ...
│   │   │   └── manual/
│   ├── scripts/
│   │   ├── generate-images.js
│   │   ├── extract-prompts.js
│   │   └── image-selector-ui.js
```

### 3. **Image Generation Script**

```javascript
// scripts/generate-images.js
import { Configuration, OpenAIApi } from 'openai';
import { extract } from './extract-prompts.js';
import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';
import ora from 'ora';

class ImageGenerator {
  constructor(apiKey) {
    this.openai = new OpenAIApi(new Configuration({ apiKey }));
    this.generatedPath = './src/assets/images/generated';
    this.promptsPath = './src/assets/images/prompts';
  }

  async generateAllImages() {
    const prompts = await extract.getAllPrompts();
    
    console.log(chalk.cyan(`Found ${prompts.length} image prompts to generate`));
    
    for (const prompt of prompts) {
      await this.generateImageSet(prompt);
    }
  }

  async generateImageSet(promptData) {
    const spinner = ora(`Generating ${promptData.id}...`).start();
    
    const { id, style, mood, elements, dimensions, variations } = promptData;
    const [width, height] = dimensions.split('x').map(Number);
    
    // Construct optimized DALL-E 3 prompt
    const dallePrompt = this.constructPrompt(promptData);
    
    const outputDir = path.join(this.generatedPath, id);
    await fs.mkdir(outputDir, { recursive: true });
    
    // Save prompt data for reference
    await fs.writeFile(
      path.join(this.promptsPath, `${id}.json`),
      JSON.stringify({ ...promptData, dallePrompt }, null, 2)
    );
    
    // Generate variations
    for (let i = 1; i <= variations; i++) {
      try {
        const response = await this.openai.createImage({
          model: "dall-e-3",
          prompt: dallePrompt,
          n: 1,
          size: this.getClosestSize(width, height),
          quality: "hd",
          style: "vivid"
        });
        
        const imageUrl = response.data.data[0].url;
        const timestamp = Date.now();
        const filename = `v${i}_${timestamp}.png`;
        
        // Download and save image
        await this.downloadImage(imageUrl, path.join(outputDir, filename));
        
        spinner.text = `Generated ${id} - Variation ${i}/${variations}`;
      } catch (error) {
        console.error(chalk.red(`Failed to generate ${id} variation ${i}:`, error));
      }
    }
    
    spinner.succeed(`Generated ${variations} variations for ${id}`);
  }

  constructPrompt(promptData) {
    const { style, mood, elements, id } = promptData;
    
    // Special handling for Science Stanley branding
    const brandContext = "in the style of Smarter with Science: cyberpunk-utopian aesthetic, " +
                        "royal purple (#663399) and cyber blue (#0066CC) color scheme, " +
                        "modern scientific visualization, clean and inspiring";
    
    let prompt = `${style}. ${mood}. Features: ${elements}. ${brandContext}`;
    
    // Add specific enhancements based on image type
    if (id.includes('hero')) {
      prompt += ". Ultra wide cinematic composition, high detail, professional photography";
    } else if (id.includes('avatar')) {
      prompt += ". Character design, friendly expression, memorable silhouette";
    } else if (id.includes('bg')) {
      prompt += ". Abstract pattern, suitable for text overlay, subtle and sophisticated";
    }
    
    return prompt;
  }

  getClosestSize(width, height) {
    // DALL-E 3 supported sizes
    const sizes = [
      { w: 1024, h: 1024, key: "1024x1024" },
      { w: 1792, h: 1024, key: "1792x1024" },
      { w: 1024, h: 1792, key: "1024x1792" }
    ];
    
    const aspectRatio = width / height;
    let closest = sizes[0];
    let minDiff = Math.abs(aspectRatio - 1);
    
    for (const size of sizes) {
      const sizeRatio = size.w / size.h;
      const diff = Math.abs(aspectRatio - sizeRatio);
      if (diff < minDiff) {
        minDiff = diff;
        closest = size;
      }
    }
    
    return closest.key;
  }

  async downloadImage(url, filepath) {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    await fs.writeFile(filepath, Buffer.from(buffer));
  }
}

// Interactive CLI
async function main() {
  console.log(chalk.magenta.bold('\n🧬 Smarter with Science - AI Image Generator\n'));
  
  const { hasApiKey } = await inquirer.prompt([{
    type: 'confirm',
    name: 'hasApiKey',
    message: 'Do you have an OpenAI API key?',
    default: false
  }]);
  
  if (!hasApiKey) {
    console.log(chalk.yellow('\nGet your API key at: https://platform.openai.com/api-keys'));
    return;
  }
  
  const { apiKey } = await inquirer.prompt([{
    type: 'password',
    name: 'apiKey',
    message: 'Enter your OpenAI API key:',
    mask: '*'
  }]);
  
  const generator = new ImageGenerator(apiKey);
  
  const { action } = await inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'Generate all missing images',
      'Regenerate specific image set',
      'Generate new variations',
      'Select final images'
    ]
  }]);
  
  switch (action) {
    case 'Generate all missing images':
      await generator.generateAllImages();
      break;
    // ... other cases
  }
}

main().catch(console.error);
```

### 4. **Visual Element Strategy Guide**

```markdown
## Visual Asset Categories for Science Stanley's Website

### Hero & Banner Images
- **Homepage Hero**: Vast cyberpunk laboratory with collaborative scientists
- **Section Heroes**: Abstract scientific visualizations for each major section
- **CTA Banners**: Gradient backgrounds with particle effects
- **Event Banners**: Science Sunday community gathering visualizations

### Character & Mascot Assets
- **Science Stanley Avatar**: Multiple poses and expressions
- **Community Member Avatars**: Diverse scientist representations
- **Achievement Badges**: Gamified recognition symbols
- **Emoji Set**: Custom science-themed reactions

### Background Patterns
- **DNA Helix Patterns**: Subtle backgrounds for content sections
- **Neural Network Grids**: Connection-themed backgrounds
- **Molecule Structures**: Decorative elements for cards
- **Data Flow Visualizations**: Animated background possibilities

### Project Visualizations
- **Category Icons**: Unique visual identity per project type
- **Impact Infographics**: Data visualization templates
- **Process Diagrams**: Scientific method illustrations
- **Timeline Graphics**: Research journey visualizations

### Interactive Elements
- **Loading Animations**: Science concept micro-lessons
- **Hover States**: Molecular transformation effects
- **Transition Elements**: Particle dispersal effects
- **Success Animations**: Celebration moments

### Content Enrichment
- **Blog Headers**: Unique images per article category
- **Quote Backgrounds**: Inspirational scientist portraits
- **Team Portraits**: Stylized contributor images
- **Resource Icons**: Visual navigation aids
```

### 5. **Iterative Selection Interface**

```javascript
// scripts/image-selector-ui.js
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

export async function launchImageSelector() {
  const server = await createServer({
    root: path.dirname(fileURLToPath(import.meta.url)),
    server: {
      port: 5174,
    },
    plugins: [{
      name: 'image-selector',
      configureServer(server) {
        server.middlewares.use('/api/images', async (req, res) => {
          // Serve generated images metadata
          const images = await getGeneratedImages();
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(images));
        });
        
        server.middlewares.use('/api/select', async (req, res) => {
          // Handle image selection
          const { imageId, selectedVersion } = await parseBody(req);
          await markAsSelected(imageId, selectedVersion);
          res.writeHead(200);
          res.end();
        });
      }
    }]
  });
  
  await server.listen();
  
  console.log(chalk.green('\n✨ Image Selector UI available at:'));
  console.log(chalk.cyan('http://localhost:5174/image-selector\n'));
}

// Image selector React component
const ImageSelectorApp = () => {
  return (
    <div className="image-selector">
      <style>{`
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem;
          background: #000;
        }
        
        .image-set {
          background: #1a1a2e;
          border-radius: 12px;
          padding: 1.5rem;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        
        .image-set:hover {
          border-color: #663399;
          box-shadow: 0 0 30px rgba(102, 51, 153, 0.5);
        }
        
        .variations {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .variation {
          cursor: pointer;
          border: 3px solid transparent;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        
        .variation:hover {
          border-color: #0066CC;
          transform: scale(1.05);
        }
        
        .variation.selected {
          border-color: #00ff00;
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
        }
        
        .prompt-info {
          background: rgba(102, 51, 153, 0.2);
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
          font-family: 'Fira Code', monospace;
          font-size: 0.875rem;
        }
        
        .regenerate-btn {
          background: linear-gradient(45deg, #663399, #0066CC);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }
        
        .regenerate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 51, 153, 0.5);
        }
      `}</style>
      
      {/* Image selection interface */}
    </div>
  );
};
```

### 6. **Proactive Visual Enhancement Strategies**

```markdown
## AI Image Generation Best Practices for SwS

### Initial Generation Phase
1. **Audit Existing Content**
   - Identify all text-heavy sections needing visual breaks
   - Find data points that could be visualized
   - Locate CTAs that need visual emphasis

2. **Create Comprehensive Prompt Set**
   ```markdown
   <!-- IMAGE_PROMPT[data-viz-compute-hours]
   Style: Futuristic holographic bar chart
   Data: Show exponential growth of compute hours donated
   Colors: Gradient from purple to cyan with glow effects
   Animation: Suggest upward movement and energy
   Dimensions: 800x400
   Variations: 4
   -->
   ```

3. **Generate Variations for A/B Testing**
   - Create multiple moods: professional, playful, dramatic
   - Test different color intensities
   - Vary complexity levels

### Iteration Process with User

1. **Initial Review Session**
   ```
   "I've generated 3 variations for the hero banner:
   - V1: Focus on human collaboration
   - V2: Emphasis on technology/AI
   - V3: Abstract scientific patterns
   
   Which direction resonates most with the SwS vision?"
   ```

2. **Refinement Prompts**
   ```
   "Based on your preference for V2, should we:
   - Add more purple tones?
   - Include Science Stanley's avatar?
   - Make it more/less abstract?
   - Adjust the energy level?"
   ```

3. **Context-Specific Variations**
   ```
   For blog posts about:
   - Health: Cellular/molecular imagery
   - Climate: Ocean/atmospheric visualizations  
   - Community: Diverse human connections
   - Technology: Neural networks/data flows
   ```

### Visual Element Placement Strategy

#### Homepage
- Hero: Large cinematic banner (1920x800)
- Section dividers: Abstract wave patterns
- Card backgrounds: Subtle animated gradients
- CTA buttons: Glowing particle effects

#### Project Gallery
- Category headers: Icon + abstract background
- Project cards: Dynamic hover previews
- Impact metrics: Animated data visualizations
- Success stories: Before/after comparisons

#### Blog
- Article headers: Unique per category
- Pull quotes: Stylized backgrounds
- Author avatars: AI-generated portraits
- Related posts: Visual link previews

#### Interactive Elements
- Loading states: Educational animations
- Error pages: Friendly Science Stanley reactions
- Empty states: Encouraging visualizations
- Success confirmations: Celebration animations
```

### 7. **Quality Control Checklist**

```markdown
## Image Generation Quality Standards

### Technical Requirements
- [ ] Correct dimensions for responsive display
- [ ] File size optimized (< 200KB for heroes, < 50KB for icons)
- [ ] Proper transparency where needed
- [ ] Consistent color profile (sRGB)

### Brand Alignment
- [ ] Uses SwS color palette appropriately
- [ ] Matches cyberpunk-utopian aesthetic
- [ ] Conveys warmth despite technical theme
- [ ] Includes purple/blue gradient elements

### Accessibility
- [ ] Sufficient contrast for overlaid text
- [ ] No seizure-inducing patterns
- [ ] Meaningful alt text generated
- [ ] Reduced motion alternatives available

### Emotional Impact
- [ ] Inspires curiosity and wonder
- [ ] Feels inclusive and welcoming
- [ ] Suggests innovation and progress
- [ ] Maintains professional credibility
```

### 8. **Automated Prompt Enhancement**

```javascript
// scripts/enhance-prompts.js
export class PromptEnhancer {
  constructor() {
    this.brandGuidelines = {
      colors: ['royal purple (#663399)', 'cyber blue (#0066CC)', 'black', 'white'],
      style: 'cyberpunk-utopian, modern scientific, clean lines',
      mood: 'inspiring, warm despite technical nature, inclusive',
      avoid: 'cold, sterile, overly complex, intimidating'
    };
  }

  enhance(basePrompt) {
    const enhanced = {
      ...basePrompt,
      style: this.addBrandStyle(basePrompt.style),
      quality: this.addQualityModifiers(basePrompt),
      negative: this.addNegativePrompts()
    };
    
    return this.constructFinalPrompt(enhanced);
  }

  addBrandStyle(style) {
    return `${style}. ${this.brandGuidelines.style}. ` +
           `Color palette: ${this.brandGuidelines.colors.join(', ')}. ` +
           `Mood: ${this.brandGuidelines.mood}`;
  }

  addQualityModifiers(prompt) {
    const modifiers = [
      'high quality',
      'professional',
      'detailed',
      'cohesive design',
      '4k resolution'
    ];
    
    if (prompt.id.includes('hero')) {
      modifiers.push('cinematic', 'dramatic lighting', 'depth of field');
    }
    
    if (prompt.id.includes('icon')) {
      modifiers.push('vector style', 'scalable', 'simple but memorable');
    }
    
    return modifiers.join(', ');
  }

  addNegativePrompts() {
    return `Avoid: ${this.brandGuidelines.avoid}, ` +
           'stock photo look, generic sci-fi, dated technology aesthetics';
  }
}
```

### 9. **Integration Instructions for Claude-Code**

```markdown
## Implementation Steps for AI Image System

1. **Setup Phase**
   - Create directory structure for image management
   - Install dependencies: openai, sharp, inquirer, ora
   - Set up extraction script to find IMAGE_PROMPT tags

2. **Initial Prompt Creation**
   - As you build each component, add IMAGE_PROMPT tags
   - Think about what visual would enhance user engagement
   - Consider loading states, empty states, success states

3. **Generation Workflow**
   ```bash
   # First run - extract all prompts
   npm run extract-prompts
   
   # Generate images (will ask for API key)
   npm run generate-images
   
   # Launch selection UI
   npm run select-images
   
   # Auto-replace placeholders
   npm run integrate-images
   ```

4. **Component Integration**
   ```astro
   ---
   import { getImage } from 'astro:assets';
   import heroImage from '@generated/hero-banner-main/selected.png';
   
   const optimizedHero = await getImage({
     src: heroImage,
     format: 'avif',
     quality: 85,
     width: 1920
   });
   ---
   
   <section 
     class="hero"
     style={`background-image: url(${optimizedHero.src})`}
   >
   ```

5. **Continuous Improvement**
   - Monitor which images get positive user feedback
   - A/B test different variations
   - Regenerate based on analytics data
   - Seasonal updates for freshness

## Questions to Ask User During Development

1. "I've prepared prompts for 15 different visual elements. Should we generate all at once or start with the hero sections?"

2. "For Science Stanley's avatar, do you prefer:
   - Realistic human with digital elements
   - Fully stylized cartoon character  
   - Abstract representation
   - Morphing between human and AI?"

3. "The current hero image variations range from abstract to literal. On a scale of 1-10, how abstract should we go?"

4. "Should project category images be:
   - Consistent style with color variations
   - Completely unique per category
   - Themed but with shared elements?"

5. "For loading animations, should they:
   - Teach science concepts
   - Show Science Stanley in action
   - Display abstract progress
   - Rotate through different styles?"
```

### 10. **Performance & Optimization**

```javascript
// config/image-optimization.js
export const imageOptimization = {
  formats: {
    hero: {
      formats: ['avif', 'webp', 'jpg'],
      sizes: [640, 1024, 1920, 2560],
      quality: { avif: 80, webp: 85, jpg: 85 }
    },
    card: {
      formats: ['avif', 'webp', 'jpg'],
      sizes: [400, 800],
      quality: { avif: 85, webp: 90, jpg: 90 }
    },
    icon: {
      formats: ['svg', 'png'],
      sizes: [64, 128, 256],
      quality: { png: 95 }
    }
  },
  
  lazyLoad: {
    rootMargin: '50px',
    threshold: 0.01
  },
  
  placeholder: {
    type: 'blur',
    blurRadius: 20
  }
};
```

## Final Integration Notes

This AI-powered image generation system transforms the Smarter with Science website from text-heavy to visually stunning while maintaining the scientific credibility and warmth of the Science Stanley brand. The system is designed to be iterative, allowing for continuous improvement based on user feedback and engagement metrics.

Key benefits:
1. **Consistency**: All images follow brand guidelines automatically
2. **Flexibility**: Easy to regenerate and test variations
3. **Efficiency**: Batch generation saves design time
4. **Optimization**: Automatic format conversion and sizing
5. **Accessibility**: Alt text and descriptions built into the process
6. **Scalability**: Easy to add new visual elements as site grows

Remember: The goal is to create visuals that make visitors say "whoa!" while still feeling warm, inclusive, and scientifically credible. Every image should reinforce the message that science + community = exponential impact.