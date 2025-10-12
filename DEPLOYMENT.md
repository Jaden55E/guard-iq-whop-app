# Guard IQ Calculator - Whop App Deployment Guide

## Current Status
✅ App is working locally at http://localhost:3000
✅ Environment variables configured
✅ Code committed to git

## Next Steps to Deploy

### Option 1: Deploy with Vercel (Recommended - as shown in tutorial)

1. **Push to GitHub:**
   - Create a new repository on GitHub
   - Run these commands:
     ```bash
     cd /home/ubuntu/guard-iq-whop-app
     git remote add origin <YOUR_GITHUB_REPO_URL>
     git branch -M main
     git push -u origin main
     ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     ```
     WHOP_API_KEY=PfywamaFwM2yEeSCMUc1hDadb_gzZKxSCYjH_86FJwU
     NEXT_PUBLIC_WHOP_APP_ID=app_PxC1jWNofXsoye
     NEXT_PUBLIC_WHOP_AGENT_USER_ID=user_YDHdSWKFvLko7
     NEXT_PUBLIC_WHOP_COMPANY_ID=biz_ijrwAWpDKgZwgE
     ```
   - Click "Deploy"

3. **Update Whop Dashboard:**
   - Copy your Vercel deployment URL (e.g., https://your-app.vercel.app)
   - Go to your Whop app settings
   - Under "Hosting" section, paste the URL in "Base URL"
   - Save changes

### Option 2: Deploy with Manus (Quick Deploy)

I can deploy this directly for you using the Manus deployment system.

## Installation Link

Once deployed, users can install your app at:
https://whop.com/apps/app_PxC1jWNofXsoye/install

## Environment Variables Needed

Make sure these are set in your production environment:
- WHOP_API_KEY
- NEXT_PUBLIC_WHOP_APP_ID
- NEXT_PUBLIC_WHOP_AGENT_USER_ID
- NEXT_PUBLIC_WHOP_COMPANY_ID

