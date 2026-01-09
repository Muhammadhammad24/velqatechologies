# 🚀 Hostinger Deployment Instructions

## Step 1: Access Hostinger File Manager
1. Login to your Hostinger account
2. Go to **File Manager** in your hosting panel
3. Navigate to `public_html` folder

## Step 2: Upload Files
1. **Delete all existing files** in `public_html` (if any)
2. **Upload ALL files** from `deployment-final` folder to `public_html`
3. Make sure to upload:
   - All HTML files (index.html, 404.html, etc.)
   - All images (*.jpg, *.png, *.svg)
   - `_next` folder with all JavaScript and CSS files
   - `.htaccess` file (very important!)

## Step 3: Set Permissions
1. Right-click on `.htaccess` file
2. Set permissions to **644**
3. Make sure all folders have **755** permissions

## Step 4: Test Your Website
1. Visit your domain (e.g., velqatechnologies.com)
2. Test all pages and navigation
3. Check if images are loading properly

## 📁 Files to Upload (from deployment-final folder):
- `index.html` (homepage)
- `404.html` (error page)
- All image files (*.jpg, *.png, *.svg)
- `_next/` folder (contains all JavaScript and CSS)
- All page folders (about/, services/, industries/, etc.)
- `.htaccess` file (for proper routing)
- `robots.txt` and `sitemap.xml`

## ✅ Success Indicators:
- Homepage loads with proper styling
- Navigation works between pages
- Images display correctly
- Industries section shows proper hover effects
- Contact forms work properly

## 🔧 Troubleshooting:
- If pages show 404 errors: Check if `.htaccess` file is uploaded
- If styling is broken: Ensure `_next/static/` folder is uploaded completely
- If images don't load: Check image file paths and permissions

Your website is now ready for production! 🎉