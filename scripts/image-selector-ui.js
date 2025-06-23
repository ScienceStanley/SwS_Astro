import { readFile, writeFile, copyFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { existsSync } from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function selectImages() {
  // Load results
  const resultsPath = join(projectRoot, 'generated-images-results.json');
  if (!existsSync(resultsPath)) {
    console.error(chalk.red('❌ No generated-images-results.json found!'));
    console.log(chalk.yellow('Please run: npm run generate-images'));
    process.exit(1);
  }

  const results = JSON.parse(await readFile(resultsPath, 'utf-8'));
  const successfulResults = results.filter(r => !r.error);
  
  if (successfulResults.length === 0) {
    console.error(chalk.red('❌ No successful image generations found!'));
    process.exit(1);
  }

  // Group by prompt ID
  const groupedResults = {};
  successfulResults.forEach(result => {
    if (!groupedResults[result.promptId]) {
      groupedResults[result.promptId] = [];
    }
    groupedResults[result.promptId].push(result);
  });

  console.log(chalk.blue(`📋 Found ${Object.keys(groupedResults).length} unique prompts with images`));
  
  // Create final images directory
  const finalDir = join(projectRoot, 'public', 'images');
  await mkdir(finalDir, { recursive: true });

  // Process each prompt
  const selections = [];
  
  for (const [promptId, variations] of Object.entries(groupedResults)) {
    console.log(chalk.cyan(`\n🎨 ${promptId}`));
    console.log(chalk.gray(`   File: ${variations[0].metadata.file}`));
    console.log(chalk.gray(`   ${variations.length} variation(s) available`));
    
    if (variations.length === 1) {
      // Auto-select if only one variation
      const selected = variations[0];
      const sourcePath = join(projectRoot, 'public', 'generated-images', selected.filename);
      const destPath = join(finalDir, `${promptId}.png`);
      
      await copyFile(sourcePath, destPath);
      console.log(chalk.green(`   ✅ Auto-selected single variation`));
      
      selections.push({
        promptId,
        selected: selected.filename,
        finalPath: `/images/${promptId}.png`
      });
    } else {
      // Ask user to select
      console.log(chalk.yellow('\n   Please view the generated images and select the best one:'));
      variations.forEach((v, i) => {
        console.log(chalk.gray(`   ${i + 1}. ${v.filename} - ${v.path}`));
      });
      
      const answer = await inquirer.prompt([
        {
          type: 'list',
          name: 'selection',
          message: 'Which variation would you like to use?',
          choices: variations.map((v, i) => ({
            name: `Variation ${i + 1} - ${v.filename}`,
            value: i
          }))
        }
      ]);
      
      const selected = variations[answer.selection];
      const sourcePath = join(projectRoot, 'public', 'generated-images', selected.filename);
      const destPath = join(finalDir, `${promptId}.png`);
      
      await copyFile(sourcePath, destPath);
      console.log(chalk.green(`   ✅ Selected and copied: ${selected.filename}`));
      
      selections.push({
        promptId,
        selected: selected.filename,
        finalPath: `/images/${promptId}.png`
      });
    }
  }

  // Save selections
  const selectionsPath = join(projectRoot, 'image-selections.json');
  await writeFile(selectionsPath, JSON.stringify(selections, null, 2));
  
  // Generate mapping file for easy reference
  const mapping = {};
  selections.forEach(s => {
    mapping[s.promptId] = s.finalPath;
  });
  
  const mappingPath = join(projectRoot, 'src', 'data', 'image-mapping.json');
  await mkdir(join(projectRoot, 'src', 'data'), { recursive: true });
  await writeFile(mappingPath, JSON.stringify(mapping, null, 2));
  
  console.log(chalk.blue('\n📊 Selection Summary:'));
  console.log(chalk.green(`   ✅ Selected ${selections.length} images`));
  console.log(chalk.cyan(`   📁 Images copied to: ${finalDir}`));
  console.log(chalk.cyan(`   📄 Mapping saved to: ${mappingPath}`));
  
  console.log(chalk.yellow('\n💡 Next steps:'));
  console.log('   1. Review the selected images in public/images/');
  console.log('   2. Update your components to use the image mapping');
  console.log('   3. Example usage: import imageMap from "@data/image-mapping.json"');
}

selectImages().catch(console.error);