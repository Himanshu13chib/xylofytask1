# 🚀 Vercel Deployment Guide

## Quick Deploy Steps

### 1. Import Project to Vercel
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import from GitHub: `Himanshu13chib/xylofytask1`
4. Click "Deploy"

### 2. Configuration (Auto-detected)
Vercel should automatically detect:
- **Framework**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### 3. Environment Variables (if needed)
None required for this project.

---

## Common Errors & Solutions

### Error 1: "Command failed with exit code 1"
**Cause**: Missing dependencies or build script issue

**Solution**:
```json
// Ensure package.json has these scripts:
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build"
}
```

### Error 2: "Module not found"
**Cause**: Missing dependency in package.json

**Solution**: Add missing packages locally first:
```bash
npm install --save missing-package-name
git add package.json package-lock.json
git commit -m "Add missing dependency"
git push
```

### Error 3: "404 on page refresh"
**Cause**: React Router SPA routing issue

**Solution**: Use `vercel.json` (already included):
```json
{
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### Error 4: "Build exceeds size limit"
**Cause**: Large dependencies like plotly.js

**Solution**: Already optimized in package.json

### Error 5: "Out of memory"
**Cause**: Not enough memory during build

**Solution**: Add to package.json scripts:
```json
"build": "react-scripts --max_old_space_size=4096 build"
```

---

## Alternative: Deploy QUICK_START.html

If React app deployment fails, you can deploy the standalone HTML file:

### Option A: Vercel Static HTML
1. Create new folder with only `QUICK_START.html`
2. Rename it to `index.html`
3. Deploy that folder

### Option B: GitHub Pages
1. Go to repo Settings → Pages
2. Select branch: `main`
3. Select folder: `/` (root)
4. Save
5. Your site: `https://himanshu13chib.github.io/xylofytask1/QUICK_START.html`

---

## Simplified Vercel Deployment

If you want minimal config, remove complex dependencies:

### Minimal package.json:
```json
{
  "name": "smartprice-ai",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "@mui/material": "^5.14.0",
    "@mui/icons-material": "^5.14.0",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "recharts": "^2.8.0",
    "papaparse": "^5.4.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}
```

Remove unused dependencies:
- plotly.js (large)
- @tensorflow/tfjs (very large)
- react-plotly.js
- framer-motion
- react-spring
- jspdf
- html2canvas

---

## Check Build Locally First

Before deploying, test locally:

```bash
# Build the project
npm run build

# Serve the build folder
npx serve -s build

# Open http://localhost:3000
```

If it works locally, it should work on Vercel.

---

## Current Status

✅ `vercel.json` - Added configuration
✅ `.gitignore` - Proper git ignore rules
✅ `package.json` - Build scripts configured
✅ Pushed to GitHub

---

## Support

If you're still getting errors:

1. **Share the exact error message** from Vercel build logs
2. Check Vercel dashboard → Your Project → Deployments → Click failed deployment → View logs
3. Copy the error message and we'll fix it

---

## Quick Alternative: Use QUICK_START.html

The `QUICK_START.html` file works standalone and can be deployed anywhere:

1. **Netlify Drop**: https://app.netlify.com/drop
   - Just drag and drop the HTML file

2. **GitHub Pages**: 
   - Commit and push
   - Enable in Settings → Pages

3. **Vercel Static**:
   - Create folder with just `index.html` (renamed from QUICK_START.html)
   - Deploy that

This HTML file has:
- ✅ No build process needed
- ✅ No dependencies to install
- ✅ Works immediately
- ✅ All features functional
- ✅ Price predictor works
- ✅ Both USD and INR display

---

Built for Xylofy Internship Project | June 2026
