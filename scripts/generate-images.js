import OpenAI from 'openai';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { existsSync } from 'fs';
import chalk from 'chalk';
import { config } from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Load environment variables
config({ path: join(projectRoot, '.env') });

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateImages() {
  // Check for API key
  if (!process.env.OPENAI_API_KEY) {
    console.error(chalk.red('❌ OPENAI_API_KEY environment variable not set!'));
    console.log(chalk.yellow('Please set your OpenAI API key:'));
    console.log(chalk.cyan('export OPENAI_API_KEY="your-api-key-here"'));
    process.exit(1);
  }

  // Load prompts
  const promptsPath = join(projectRoot, 'image-prompts.json');
  if (!existsSync(promptsPath)) {
    console.error(chalk.red('❌ No image-prompts.json found!'));
    console.log(chalk.yellow('Please run: npm run extract-prompts'));
    process.exit(1);
  }

  const prompts = JSON.parse(await readFile(promptsPath, 'utf-8'));
  console.log(chalk.blue(`📋 Loaded ${prompts.length} prompts`));

  // Create output directory
  const outputDir = join(projectRoot, 'public', 'generated-images');
  await mkdir(outputDir, { recursive: true });

  // Generate images
  const results = [];
  
  for (const prompt of prompts) {
    console.log(chalk.cyan(`\n🎨 Generating: ${prompt.id}`));
    console.log(chalk.gray(`   File: ${prompt.file}:${prompt.line}`));
    
    // Check if images already exist
    const variations = parseInt(prompt.Variations) || 1;
    let existingCount = 0;
    for (let i = 0; i < variations; i++) {
      const imageName = variations > 1 ? `${prompt.id}-${i + 1}.png` : `${prompt.id}.png`;
      if (existsSync(join(outputDir, imageName))) {
        existingCount++;
      }
    }
    
    if (existingCount === variations) {
      console.log(chalk.yellow(`   ⏭️  Skipping - all ${variations} variations already exist`));
      
      // Add existing files to results
      for (let i = 0; i < variations; i++) {
        const imageName = variations > 1 ? `${prompt.id}-${i + 1}.png` : `${prompt.id}.png`;
        results.push({
          promptId: prompt.id,
          variation: i + 1,
          filename: imageName,
          path: `/generated-images/${imageName}`,
          url: 'existing',
          prompt: 'skipped - already exists',
          metadata: prompt
        });
      }
      continue;
    }
    
    try {
      // Build the full prompt
      const fullPrompt = [
        prompt.Style && `Style: ${prompt.Style}`,
        prompt.Mood && `Mood: ${prompt.Mood}`,
        prompt.Elements && `Elements: ${prompt.Elements}`,
        prompt.Colors && `Colors: ${prompt.Colors}`,
        'High quality, professional, no text or watermarks'
      ].filter(Boolean).join('. ');

      console.log(chalk.gray(`   Prompt: ${fullPrompt.substring(0, 100)}...`));

      // Parse dimensions
      const dimensions = prompt.Dimensions || '1024x1024';
      const [width, height] = dimensions.split('x').map(Number);
      
      // Determine size parameter for DALL-E 3
      let size = '1024x1024';
      if (width === 1792 && height === 1024) size = '1792x1024';
      else if (width === 1024 && height === 1792) size = '1024x1792';

      // Generate variations
      const variations = parseInt(prompt.Variations) || 1;
      
      for (let i = 0; i < variations; i++) {
        const imageName = variations > 1 ? `${prompt.id}-${i + 1}.png` : `${prompt.id}.png`;
        
        // Skip if this variation already exists
        if (existsSync(join(outputDir, imageName))) {
          console.log(chalk.yellow(`   ⏭️  Skipping variation ${i + 1}/${variations} - already exists`));
          results.push({
            promptId: prompt.id,
            variation: i + 1,
            filename: imageName,
            path: `/generated-images/${imageName}`,
            url: 'existing',
            prompt: 'skipped - already exists',
            metadata: prompt
          });
          continue;
        }
        
        console.log(chalk.yellow(`   Generating variation ${i + 1}/${variations}...`));
        
        const response = await openai.images.generate({
          model: "dall-e-3",
          prompt: fullPrompt,
          n: 1,
          size: size,
          quality: "standard",
          response_format: "url",
        });

        const imageUrl = response.data[0].url;
        
        // Download and save image
        console.log(chalk.green(`   ✅ Generated! Downloading...`));
        const imageResponse = await fetch(imageUrl);
        const buffer = await imageResponse.arrayBuffer();
        const outputPath = join(outputDir, imageName);
        await writeFile(outputPath, Buffer.from(buffer));
        
        results.push({
          promptId: prompt.id,
          variation: i + 1,
          filename: imageName,
          path: `/generated-images/${imageName}`,
          url: imageUrl,
          prompt: fullPrompt,
          metadata: prompt
        });
        
        console.log(chalk.green(`   ✅ Saved: ${imageName}`));
        
        // Add delay to avoid rate limits
        if (i < variations - 1 || prompts.indexOf(prompt) < prompts.length - 1) {
          console.log(chalk.gray('   Waiting 2s to avoid rate limits...'));
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    } catch (error) {
      console.error(chalk.red(`   ❌ Failed: ${error.message}`));
      results.push({
        promptId: prompt.id,
        error: error.message,
        metadata: prompt
      });
    }
  }

  // Save results
  const resultsPath = join(projectRoot, 'generated-images-results.json');
  await writeFile(resultsPath, JSON.stringify(results, null, 2));
  
  // Summary
  console.log(chalk.blue('\n📊 Generation Summary:'));
  const successful = results.filter(r => !r.error).length;
  const failed = results.filter(r => r.error).length;
  console.log(chalk.green(`   ✅ Successful: ${successful}`));
  if (failed > 0) {
    console.log(chalk.red(`   ❌ Failed: ${failed}`));
  }
  console.log(chalk.cyan(`   📁 Images saved to: ${outputDir}`));
  console.log(chalk.cyan(`   📄 Results saved to: ${resultsPath}`));
}

generateImages().catch(console.error);