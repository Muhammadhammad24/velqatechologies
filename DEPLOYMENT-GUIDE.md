# 🚀 Hostinger Deployment Guide

## Quick Deployment (Automated)

### Windows:
```bash
deploy.bat
```

### Mac/Linux:
```bash
chmod +x deploy.sh
./deploy.sh
```

## Manual Deployment Steps

### 1. Build the Project
```bash
npm run build
```

### 2. Create ZIP File
After successful build, you'll have an `out` folder. 

**Option A: Use the deployment script (recommended)**
- Run `deploy.bat` (Windows) or `deploy.sh` (Mac/Linux)
- This creates `velqa-website.zip` automatically

**Option B: Manual ZIP creation**
1. Copy all files from `out` folder to a new `deployment` folder
2. Copy `.htaccess` file to the `deployment` folder
3. Right-click the `deployment` folder and select "Compress to ZIP"
4. Rename the ZIP file to `velqa-website.zip`

### 3. Upload to Hostinger

1. **Login to Hostinger hPanel**
   - Go to https://hpanel.hostinger.com
   - Login with your credentials

2. **Access File Manager**
   - Go to "Files" → "File Manager"
   - Navigate to `public_html` folder

3. **Upload ZIP File**
   - Click "Upload Files"
   - Select `velqa-website.zip`
   - Wait for upload to complete

4. **Extract Files**
   - Right-click on `velqa-website.zip`
   - Select "Extract"
   - Choose "Extract Here"
   - Delete the ZIP file after extraction

5. **Verify Deployment**
   - Visit https://velqatechnologies.com
   - Check that all pages load correctly

## File Structure After Extraction

Your `public_html` should contain:
```
public_html/
├── _next/          (Next.js assets)
├── about/          (About page)
├── services/       (Services pages)
├── industries/     (Industries pages)
├── contact/        (Contact page)
├── careers/        (Careers page)
├── velqa-publishers/ (Publishers page)
├── index.html      (Home page)
├── sitemap.xml     (SEO sitemap)
├── robots.txt      (SEO robots)
├── manifest.json   (PWA manifest)
├── .htaccess       (Server configuration)
└── [images]        (All website images)
```

## Post-Deployment Checklist

- [ ] Website loads at https://velqatechnologies.com
- [ ] All pages are accessible
- [ ] Images display correctly
- [ ] Contact forms work
- [ ] SSL certificate is active (Force HTTPS enabled)
- [ ] Submit sitemap to Google Search Console

## Troubleshooting

### Images not loading
- Ensure all files from `out` folder were uploaded
- Check that image files are in the correct directories

### 404 errors on page refresh
- Ensure `.htaccess` file was uploaded
- Check that URL rewriting is enabled in Hostinger

### SSL issues
- Go to hPanel → Security → SSL
- Enable "Force HTTPS"

## Support

If you encounter issues:
1. Check Hostinger's documentation
2. Contact Hostinger support
3. Verify all files were uploaded correctly

---

**Your professional BPO website is ready to go live! 🎉**