# 🚀 MANUAL UPLOAD TO HOSTINGER

## If GitHub deployment fails, use manual upload:

### Step 1: Prepare Files
Your `out` folder contains the complete website.

### Step 2: Upload via File Manager
1. Go to Hostinger hPanel
2. Open "File Manager"
3. Navigate to `public_html` folder
4. Delete all existing files in `public_html`
5. Upload ALL contents of your `out` folder to `public_html`

### Step 3: File Structure Should Be:
```
public_html/
├── index.html
├── _next/
├── about/
├── careers/
├── contact/
├── services/
├── industries/
├── robots.txt
├── sitemap.xml
└── all image files
```

### Step 4: Set Permissions
- Set folder permissions to 755
- Set file permissions to 644

### Step 5: Check .htaccess
Create `.htaccess` file in `public_html` with:
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static files
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```