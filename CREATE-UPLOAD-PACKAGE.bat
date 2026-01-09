@echo off
echo ========================================
echo    CREATING UPLOAD PACKAGE
echo ========================================

echo Creating deployment package...
if exist deployment-package (
    rmdir /s /q deployment-package
)
mkdir deployment-package

echo Copying website files...
xcopy /E /I /Y out\* deployment-package\

echo Creating .htaccess file...
echo RewriteEngine On > deployment-package\.htaccess
echo RewriteCond %%{REQUEST_FILENAME} !-f >> deployment-package\.htaccess
echo RewriteCond %%{REQUEST_FILENAME} !-d >> deployment-package\.htaccess
echo RewriteRule ^^(.*)$ /index.html [L] >> deployment-package\.htaccess

echo Creating upload instructions...
echo ======================================== > deployment-package\UPLOAD-INSTRUCTIONS.txt
echo    HOSTINGER UPLOAD INSTRUCTIONS >> deployment-package\UPLOAD-INSTRUCTIONS.txt
echo ======================================== >> deployment-package\UPLOAD-INSTRUCTIONS.txt
echo. >> deployment-package\UPLOAD-INSTRUCTIONS.txt
echo 1. Go to Hostinger File Manager >> deployment-package\UPLOAD-INSTRUCTIONS.txt
echo 2. Open public_html folder >> deployment-package\UPLOAD-INSTRUCTIONS.txt
echo 3. DELETE ALL existing files >> deployment-package\UPLOAD-INSTRUCTIONS.txt
echo 4. Upload ALL files from this folder >> deployment-package\UPLOAD-INSTRUCTIONS.txt
echo 5. Your website will be live! >> deployment-package\UPLOAD-INSTRUCTIONS.txt

echo.
echo ========================================
echo    ✅ PACKAGE READY!
echo ========================================
echo.
echo All files are ready in 'deployment-package' folder
echo Upload ALL these files to public_html in Hostinger
echo.
echo Opening folder...
start deployment-package

pause