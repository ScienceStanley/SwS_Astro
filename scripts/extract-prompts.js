import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Regex to match IMAGE_PROMPT blocks
const IMAGE_PROMPT_REGEX = /<!--\s*IMAGE_PROMPT\[([^\]]+)\]([\s\S]*?)-->/g;

async function extractPrompts() {
  const prompts = [];
  const srcPath = join(projectRoot, 'src');
  
  // First, load UI elements prompts if they exist
  const uiPromptsPath = join(projectRoot, 'ui-elements-prompts.json');
  if (existsSync(uiPromptsPath)) {
    const uiPrompts = JSON.parse(await readFile(uiPromptsPath, 'utf-8'));
    prompts.push(...uiPrompts);
    console.log(`📋 Loaded ${uiPrompts.length} UI element prompts from ui-elements-prompts.json`);
  }

  // Load Ghibli style prompts if they exist
  const ghibliPromptsPath = join(projectRoot, 'ghibli-style-prompts.json');
  if (existsSync(ghibliPromptsPath)) {
    const ghibliPrompts = JSON.parse(await readFile(ghibliPromptsPath, 'utf-8'));
    prompts.push(...ghibliPrompts);
    console.log(`🌸 Loaded ${ghibliPrompts.length} Ghibli style prompts from ghibli-style-prompts.json`);
  }
  
  async function scanDirectory(dir) {
    const items = await readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = join(dir, item.name);
      
      if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
        await scanDirectory(fullPath);
      } else if (item.isFile() && ['.astro', '.tsx', '.jsx', '.mdx'].includes(extname(item.name))) {
        const content = await readFile(fullPath, 'utf-8');
        const relativePath = fullPath.replace(projectRoot + '/', '');
        
        let match;
        while ((match = IMAGE_PROMPT_REGEX.exec(content)) !== null) {
          const [fullMatch, id, promptContent] = match;
          const lineNumber = content.substring(0, match.index).split('\n').length;
          
          // Parse prompt attributes
          const lines = promptContent.trim().split('\n');
          const attributes = {};
          
          lines.forEach(line => {
            const colonIndex = line.indexOf(':');
            if (colonIndex > -1) {
              const key = line.substring(0, colonIndex).trim();
              const value = line.substring(colonIndex + 1).trim();
              attributes[key] = value;
            }
          });
          
          prompts.push({
            id,
            file: relativePath,
            line: lineNumber,
            ...attributes
          });
        }
      }
    }
  }
  
  console.log('🔍 Scanning for IMAGE_PROMPT tags...');
  await scanDirectory(srcPath);
  
  if (prompts.length === 0) {
    console.log('❌ No IMAGE_PROMPT tags found!');
    return;
  }
  
  console.log(`✅ Found ${prompts.length} image prompts`);
  
  // Save prompts to JSON file
  const outputPath = join(projectRoot, 'image-prompts.json');
  await writeFile(outputPath, JSON.stringify(prompts, null, 2));
  console.log(`📝 Saved prompts to ${outputPath}`);
  
  // Display summary
  console.log('\n📊 Summary by file:');
  const byFile = {};
  prompts.forEach(prompt => {
    byFile[prompt.file] = (byFile[prompt.file] || 0) + 1;
  });
  
  Object.entries(byFile).forEach(([file, count]) => {
    console.log(`  ${file}: ${count} prompts`);
  });
}

extractPrompts().catch(console.error);