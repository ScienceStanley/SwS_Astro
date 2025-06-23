import { copyFile, mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readdirSync } from 'fs';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function selectUIElements() {
  const generatedDir = join(projectRoot, 'public', 'generated-images');
  const uiDir = join(projectRoot, 'public', 'ui-elements');
  await mkdir(uiDir, { recursive: true });

  // UI element patterns to select
  const uiPatterns = [
    'nav-logo-pixelart',
    'hero-banner-pixelart', 
    'section-divider-dna',
    'button-primary-pixelart',
    'button-secondary-pixelart',
    'card-frame-pixelart',
    'progress-bar-pixelart',
    'icon-discord-pixelart',
    'icon-github-pixelart',
    'icon-science-pixelart',
    'background-grid-pixelart',
    'loading-spinner-pixelart',
    'footer-decoration-pixelart'
  ];

  // Project placeholders
  const projectPatterns = [
    'project-ocean-vision-pixel',
    'project-rare-disease-pixel', 
    'project-quantum-biology-pixel',
    'project-mesh-networks-pixel',
    'project-steam-vr-pixel',
    'project-algae-protein-pixel'
  ];

  const allFiles = readdirSync(generatedDir);
  const uiMapping = {};
  const projectMapping = {};
  
  console.log(chalk.blue('🎨 Selecting UI Elements...'));

  // Select UI elements (first variation of each)
  for (const pattern of uiPatterns) {
    const matchingFiles = allFiles.filter(f => f.startsWith(pattern + '-1.png'));
    if (matchingFiles.length > 0) {
      const sourceFile = matchingFiles[0];
      const destName = pattern + '.png';
      const sourcePath = join(generatedDir, sourceFile);
      const destPath = join(uiDir, destName);
      
      await copyFile(sourcePath, destPath);
      uiMapping[pattern] = `/ui-elements/${destName}`;
      console.log(chalk.green(`   ✅ Selected: ${pattern}`));
    } else {
      console.log(chalk.yellow(`   ⚠️  Missing: ${pattern}`));
    }
  }

  console.log(chalk.blue('\n🔬 Selecting Project Placeholders...'));

  // Select project placeholders (first variation of each)
  for (const pattern of projectPatterns) {
    const matchingFiles = allFiles.filter(f => f.startsWith(pattern + '-1.png'));
    if (matchingFiles.length > 0) {
      const sourceFile = matchingFiles[0];
      const destName = pattern + '.png';
      const sourcePath = join(generatedDir, sourceFile);
      const destPath = join(uiDir, destName);
      
      await copyFile(sourcePath, destPath);
      projectMapping[pattern] = `/ui-elements/${destName}`;
      console.log(chalk.green(`   ✅ Selected: ${pattern}`));
    } else {
      console.log(chalk.yellow(`   ⚠️  Missing: ${pattern}`));
    }
  }

  // Save mappings
  const uiMappingPath = join(projectRoot, 'src', 'data', 'ui-mapping.json');
  const projectMappingPath = join(projectRoot, 'src', 'data', 'project-placeholders.json');
  
  await mkdir(join(projectRoot, 'src', 'data'), { recursive: true });
  await writeFile(uiMappingPath, JSON.stringify(uiMapping, null, 2));
  await writeFile(projectMappingPath, JSON.stringify(projectMapping, null, 2));

  console.log(chalk.blue('\n📊 Selection Summary:'));
  console.log(chalk.green(`   ✅ UI Elements: ${Object.keys(uiMapping).length}`));
  console.log(chalk.green(`   ✅ Project Placeholders: ${Object.keys(projectMapping).length}`));
  console.log(chalk.cyan(`   📁 Files saved to: ${uiDir}`));
  console.log(chalk.cyan(`   📄 UI Mapping: ${uiMappingPath}`));
  console.log(chalk.cyan(`   📄 Project Mapping: ${projectMappingPath}`));

  console.log(chalk.yellow('\n💡 Usage:'));
  console.log('   import uiMap from "@data/ui-mapping.json"');
  console.log('   import projectPlaceholders from "@data/project-placeholders.json"');
}

selectUIElements().catch(console.error);