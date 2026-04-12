# Velqa Technologies Website

Modern Next.js website for Velqa Technologies - BPO and customer support services.

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy (Easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Muhammadhammad24/velqatechologies)

### Option 2: Manual Deploy

1. **Push to GitHub** (if not already done)
```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `Muhammadhammad24/velqatechologies`
   - Click "Deploy"

That's it! Vercel will automatically:
- Detect Next.js
- Install dependencies
- Build the project
- Deploy to production

### Automatic Deployments
- Every push to `main` branch = Production deployment
- Every pull request = Preview deployment

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
├── public/           # Static assets
└── styles/           # Global styles
```

## 🌐 Live Website

Production: https://velqatechnologies.vercel.app
Custom Domain: https://velqatechnologies.com (configure in Vercel dashboard)

---

Built with Next.js 14 | Deployed on Vercel
