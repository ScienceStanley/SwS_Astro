import { readFile, writeFile, copyFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { existsSync } from 'fs';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function autoSelectImages() {
  // Load results
  const resultsPath = join(projectRoot, 'generated-images-results.json');
  if (!existsSync(resultsPath)) {
    console.error(chalk.red('❌ No generated-images-results.json found!'));
    console.log(chalk.yellow('Please run: npm run generate-images'));
    process.exit(1);
  }

  const results = JSON.parse(await readFile(resultsPath, 'utf-8'));
  const successfulResults = results.filter(r => !r.error && r.url !== 'existing');
  
  console.log(chalk.blue(`📋 Found ${successfulResults.length} generated images`));

  // Group by prompt ID
  const groupedResults = {};
  results.forEach(result => {
    if (!groupedResults[result.promptId]) {
      groupedResults[result.promptId] = [];
    }
    groupedResults[result.promptId].push(result);
  });

  // Create final images directory
  const finalDir = join(projectRoot, 'public', 'images');
  await mkdir(finalDir, { recursive: true });

  // Auto-select first variation for each prompt
  const selections = [];
  
  for (const [promptId, variations] of Object.entries(groupedResults)) {
    console.log(chalk.cyan(`\n🎨 ${promptId}`));
    
    // Always select the first variation
    const selected = variations[0];
    const sourcePath = join(projectRoot, 'public', 'generated-images', selected.filename);
    const destPath = join(finalDir, `${promptId}.png`);
    
    await copyFile(sourcePath, destPath);
    console.log(chalk.green(`   ✅ Auto-selected: ${selected.filename}`));
    
    selections.push({
      promptId,
      selected: selected.filename,
      finalPath: `/images/${promptId}.png`
    });
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
  
  console.log(chalk.blue('\n📊 Auto-Selection Summary:'));
  console.log(chalk.green(`   ✅ Selected ${selections.length} images (first variation of each)`));
  console.log(chalk.cyan(`   📁 Images copied to: ${finalDir}`));
  console.log(chalk.cyan(`   📄 Mapping saved to: ${mappingPath}`));
  
  console.log(chalk.yellow('\n💡 All images are now ready to use!'));
  console.log('   Import mapping: import imageMap from "@data/image-mapping.json"');
}

autoSelectImages().catch(console.error);