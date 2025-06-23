#!/usr/bin/env node

import OpenAI from 'openai';
import fs from 'fs/promises';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Studio Ghibli + Pixel Art UI Elements to Generate
const uiElements = [
  {
    id: 'hero-banner-ghibli',
    prompt: `Studio Ghibli inspired pixel art banner for a science website. 
Style: 16-bit pixel art with Studio Ghibli's organic, magical realism aesthetic
Mood: Wonder, discovery, hopeful technology, nature meets science
Elements: Floating digital crystals growing like plants, data streams flowing like wind through cyber-trees, holographic butterflies carrying data packets, magical laboratory with floating screens showing DNA helixes and constellation maps
Colors: Ghibli's signature soft greens (#7FB069), sky blues (#87CEEB), warm earth tones (#D2B48C), with cyberpunk purple (#a476ff) and blue (#00D4FF) accents
Dimensions: 1920x600
Technical: Pixel art, 16-bit style, crisp edges, no anti-aliasing`,
    dimensions: '1920x600',
    variations: 3
  },
  {
    id: 'nav-logo-ghibli',
    prompt: `Studio Ghibli pixel art logo for "Smarter with Science" website.
Style: 16-bit pixel art inspired by Studio Ghibli's magical technology aesthetic
Mood: Friendly, approachable science, magical wisdom
Elements: DNA double helix growing like a vine with small glowing leaves, tiny digital sprites flying around it, crystal formations at the base
Colors: Soft Ghibli greens (#7FB069), magical blues (#87CEEB), with subtle purple (#a476ff) glow
Dimensions: 120x80
Technical: Pixel art, crisp edges, suitable for navigation header`,
    dimensions: '120x80',
    variations: 4
  },
  {
    id: 'project-card-ocean',
    prompt: `Studio Ghibli pixel art for ocean science project card.
Style: 16-bit pixel art with Ghibli's nature-technology harmony
Mood: Ocean magic, marine discovery, protective technology
Elements: Underwater scene with digital coral formations, AI sensors floating like jellyfish, data streams flowing like ocean currents, bioluminescent pixels
Colors: Ocean blues (#1E90FF), sea greens (#20B2AA), Ghibli earth tones, purple tech accents (#a476ff)
Dimensions: 400x250
Technical: Pixel art for project card background`,
    dimensions: '400x250',
    variations: 3
  },
  {
    id: 'project-card-medical',
    prompt: `Studio Ghibli pixel art for medical/health science project card.
Style: 16-bit pixel art with Ghibli's healing magic aesthetic
Mood: Healing, care, medical discovery, gentle technology
Elements: Digital healing crystals, DNA strands growing like flowering vines, medical nanobots as tiny spirits, glowing health data forming constellation patterns
Colors: Healing greens (#90EE90), soft medical whites (#F0F8FF), warm Ghibli tones, purple accents (#a476ff)
Dimensions: 400x250
Technical: Pixel art for project card background`,
    dimensions: '400x250',
    variations: 3
  },
  {
    id: 'project-card-quantum',
    prompt: `Studio Ghibli pixel art for quantum science project card.
Style: 16-bit pixel art with Ghibli's mystical energy aesthetic
Mood: Quantum mystery, particle magic, reality-bending discovery
Elements: Quantum particles as glowing spirits, probability clouds like Ghibli's magic dust, entangled photons forming Celtic knot patterns, crystalline quantum computers
Colors: Mystical purples (#9370DB), quantum blues (#4169E1), Ghibli earth tones, glowing accents
Dimensions: 400x250
Technical: Pixel art for project card background`,
    dimensions: '400x250',
    variations: 3
  },
  {
    id: 'section-divider-nature',
    prompt: `Studio Ghibli pixel art section divider for science website.
Style: 16-bit pixel art with Ghibli's flowing natural elements
Mood: Connecting different worlds, bridging nature and technology
Elements: Digital vines with data-leaf patterns, flowing energy streams like wind, small tech spirits carrying information, crystalline growth patterns
Colors: Ghibli greens (#7FB069), flowing blues (#87CEEB), earth tones, subtle tech accents (#a476ff)
Dimensions: 1920x64
Technical: Horizontal divider, seamless pattern, pixel art`,
    dimensions: '1920x64',
    variations: 2
  },
  {
    id: 'button-primary-ghibli',
    prompt: `Studio Ghibli pixel art button design for primary CTAs.
Style: 16-bit pixel art with Ghibli's magical object aesthetic
Mood: Inviting, magical portal, call to adventure
Elements: Button shaped like a glowing crystal or magical doorway, subtle energy particles around edges, organic curved design
Colors: Ghibli sky blues (#87CEEB), warm accent colors, subtle purple glow (#a476ff)
Dimensions: 200x48
Technical: Button background, pixel art, interactive element`,
    dimensions: '200x48',
    variations: 3
  },
  {
    id: 'button-secondary-ghibli',
    prompt: `Studio Ghibli pixel art button design for secondary CTAs.
Style: 16-bit pixel art with Ghibli's gentle magic aesthetic
Mood: Supportive, secondary action, gentle invitation
Elements: Softer crystal formation, muted glow, nature-inspired edges like moss or lichen
Colors: Muted Ghibli greens (#7FB069), earth tones (#D2B48C), subtle accents
Dimensions: 200x48
Technical: Button background, pixel art, secondary style`,
    dimensions: '200x48',
    variations: 3
  },
  {
    id: 'background-pattern-ghibli',
    prompt: `Studio Ghibli pixel art background pattern for website.
Style: 16-bit pixel art with Ghibli's environmental storytelling
Mood: Subtle wonder, living environment, breathing technology
Elements: Scattered tiny digital seeds/spores, constellation dot patterns, microscopic tech-nature hybrid organisms, very subtle and minimal
Colors: Very faint Ghibli earth tones, minimal contrast, background subtlety
Dimensions: 400x400
Technical: Seamless tile pattern, very low opacity background`,
    dimensions: '400x400',
    variations: 2
  }
];

async function generateImage(element) {
  console.log(`🎨 Generating ${element.id}...`);
  
  const images = [];
  
  for (let i = 1; i <= element.variations; i++) {
    try {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: element.prompt,
        size: "1024x1024", // DALL-E 3 standard size, we'll note intended dimensions
        quality: "standard",
        n: 1,
      });

      if (response.data?.[0]?.url) {
        images.push({
          variation: i,
          url: response.data[0].url,
          filename: `${element.id}-${i}.png`,
          intended_dimensions: element.dimensions,
          prompt: element.prompt
        });
        
        console.log(`✅ Generated ${element.id} variation ${i}`);
      }
    } catch (error) {
      console.error(`❌ Error generating ${element.id} variation ${i}:`, error.message);
    }
    
    // Rate limiting delay
    if (i < element.variations) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  return images;
}

async function main() {
  console.log('🌟 Starting Studio Ghibli Pixel Art UI Generation...\n');
  
  const allImages = [];
  
  for (const element of uiElements) {
    const images = await generateImage(element);
    allImages.push(...images);
    
    // Longer delay between different elements
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
  
  // Save results
  const resultsPath = './ghibli-pixel-ui-results.json';
  await fs.writeFile(resultsPath, JSON.stringify(allImages, null, 2));
  
  console.log(`\n🎮 Generation complete! ${allImages.length} images generated.`);
  console.log(`📄 Results saved to: ${resultsPath}`);
  console.log('\n📋 Next steps:');
  console.log('1. Download images from URLs');
  console.log('2. Resize to intended dimensions');
  console.log('3. Place in /public/ui-elements/');
  console.log('4. Update components to use new pixel art');
}

main().catch(console.error);