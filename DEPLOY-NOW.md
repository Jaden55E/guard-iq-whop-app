# 🚀 Deploy Your Guard IQ Calculator Whop App

## ✅ What's Ready

Your Guard IQ Calculator is fully integrated into a Whop app and tested locally!

- ✅ Next.js Whop app created
- ✅ Guard IQ Calculator integrated
- ✅ Environment variables configured
- ✅ Built successfully
- ✅ Tested locally at http://localhost:3000

## 📋 Quick Deploy Steps (5 minutes)

### Step 1: Push to GitHub

1. Go to https://github.com/new
2. Create a new repository named `guard-iq-whop-app`
3. **DON'T** check "Initialize with README"
4. Click "Create repository"

5. Copy the commands GitHub shows you, but use these instead:

```bash
cd /home/ubuntu/guard-iq-whop-app
git remote add origin https://github.com/YOUR_USERNAME/guard-iq-whop-app.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in (or create account)
3. Click "Add New" → "Project"
4. Click "Import" next to your `guard-iq-whop-app` repository
5. **IMPORTANT**: Add these environment variables:

```
WHOP_API_KEY=PfywamaFwM2yEeSCMUc1hDadb_gzZKxSCYjH_86FJwU
NEXT_PUBLIC_WHOP_APP_ID=app_PxC1jWNofXsoye
NEXT_PUBLIC_WHOP_AGENT_USER_ID=user_YDHdSWKFvLko7
NEXT_PUBLIC_WHOP_COMPANY_ID=biz_ijrwAWpDKgZwgE
```

6. Click "Deploy"
7. Wait 2-3 minutes for deployment to complete
8. Copy your deployment URL (e.g., `https://guard-iq-whop-app.vercel.app`)

### Step 3: Update Whop Dashboard

1. Go to your Whop app settings:
   https://whop.com/dashboard/biz_ijrwAWpDKgZwgE/developer/apps/app_PxC1jWNofXsoye

2. Scroll to the **"Hosting"** section

3. Set these paths:
   - **Base URL**: `https://your-app.vercel.app` (paste your Vercel URL here)
   - **App path**: `/experiences/[experienceId]`
   - **Dashboard path**: `/dashboard/[companyId]`
   - **Discover path**: `/discover`

4. Click **"Save"**

### Step 4: Install & Test

1. Install your app into your Whop community:
   https://whop.com/apps/app_PxC1jWNofXsoye/install

2. Test the Guard IQ Calculator in your community!

## 🎯 Your App Details

**App Name**: impulse
**App ID**: app_PxC1jWNofXsoye
**Company ID**: biz_ijrwAWpDKgZwgE

**Installation Link**:
https://whop.com/apps/app_PxC1jWNofXsoye/install

## 📁 Project Location

Your complete project is at:
`/home/ubuntu/guard-iq-whop-app`

## 🔧 Local Development

To run locally again:
```bash
cd /home/ubuntu/guard-iq-whop-app
npm run dev
```

Visit http://localhost:3000

## ⚠️ Important Notes

- Keep your `WHOP_API_KEY` secret - never share it publicly
- The `.env.development.local` file is already in `.gitignore` so it won't be pushed to GitHub
- You'll need to add the environment variables manually in Vercel
- After deployment, it may take a minute for changes to propagate

## 🆘 Troubleshooting

**App not loading?**
- Make sure all paths in Hosting section are set correctly
- Verify environment variables are set in Vercel
- Check that Base URL matches your Vercel deployment URL exactly

**Build failing?**
- Check Vercel deployment logs
- Ensure all environment variables are set

**Need help?**
- Whop Docs: https://dev.whop.com
- Vercel Docs: https://vercel.com/docs

---

## 🎉 That's it!

Once deployed, your Guard IQ Calculator will be live and accessible through your Whop community!

