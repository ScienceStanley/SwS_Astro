# GitHub Repository Setup for SwS_Astro

## Step 1: Initialize Git Locally

```bash
# In the /home/jupyter-stanley/SwS/website/astro directory
git init
git add .
git commit -m "Initial commit: Astro project structure with cyberpunk-utopian design system"
```

## Step 2: Connect to GitHub Repository

```bash
# Add your GitHub repository as origin
git remote add origin https://github.com/ScienceStanley/SwS_Astro.git

# Create main branch and push
git branch -M main
git push -u origin main
```

## Step 3: Set Up Environment Variables

### Locally:
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your ACTUAL values:
   ```bash
   nano .env  # or use your preferred editor
   ```

3. Add your NEW OpenAI API key (after rotating the exposed one)

### On GitHub (for Actions):
1. Go to your repository settings
2. Navigate to Secrets and variables → Actions
3. Add these repository secrets:
   - `OPENAI_API_KEY`
   - `VERCEL_TOKEN` (if using Vercel)

### On Vercel (for deployment):
1. Import your GitHub repository
2. Add environment variables in Vercel dashboard
3. Use the same values from your `.env` file

## Step 4: GitHub Actions Workflow

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Run tests
      run: npm test
```

## Step 5: Protect Your Main Branch

1. Go to Settings → Branches
2. Add branch protection rule for `main`
3. Enable:
   - Require pull request reviews
   - Require status checks to pass
   - Include administrators

## Important Security Notes

⚠️ **NEVER commit these files:**
- `.env`
- Any file containing API keys
- Private configuration files

✅ **ALWAYS commit these files:**
- `.env.example` (with placeholder values)
- `.gitignore`
- Documentation files
- Source code

## Quick Commands Reference

```bash
# Check git status
git status

# View commit history
git log --oneline

# Create new branch for features
git checkout -b feature/amazing-feature

# Push changes
git add .
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature
```