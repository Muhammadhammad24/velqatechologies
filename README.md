# Velqa Technologies Website

Modern Next.js website for Velqa Technologies - BPO and customer support services.

## 🚀 Quick Deploy to Hostinger

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Deploy to Hostinger"
git push origin main
```

### Step 2: Connect Hostinger to GitHub

1. Go to **Hostinger Dashboard**
2. Select your website → **GitHub** section
3. Click **Connect to GitHub**
4. Select this repository
5. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm ci`
   - **Node Version**: `18` or `20`

### Step 3: Deploy
- Every push to `main` branch will automatically deploy
- First deployment takes 3-5 minutes
- Check deployment status in Hostinger dashboard

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
├── public/           # Static assets
├── styles/           # Global styles
└── out/              # Production build (generated)
```

## 🌐 Live Website

https://velqatechologies.com

---

Built with Next.js 14 | Deployed on Hostinger
