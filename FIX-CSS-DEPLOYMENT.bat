@echo off
echo ========================================
echo    FIXING CSS THEME DEPLOYMENT ISSUE
echo ========================================

echo Creating updated deployment package with CSS fix...
if exist css-fix-package (
    rmdir /s /q css-fix-package
)
mkdir css-fix-package

echo Copying website files...
xcopy /E /I /Y out\* css-fix-package\

echo Creating enhanced .htaccess with CSS MIME type fix...
copy CSS-FIX.htaccess css-fix-package\.htaccess

echo Creating CSS verification file...
echo /* CSS Test File - If you can see this, CSS is loading */ > css-fix-package\css-test.css
echo body { background-color: red !important; } >> css-fix-package\css-test.css

echo.
echo ========================================
echo    ✅ CSS FIX PACKAGE READY!
echo ========================================
echo.
echo INSTRUCTIONS:
echo 1. Go to Hostinger File Manager
echo 2. Delete ALL files in public_html
echo 3. Upload ALL files from 'css-fix-package' folder
echo 4. The new .htaccess will fix CSS MIME type issues
echo.
echo Opening folder...
start css-fix-package

pause