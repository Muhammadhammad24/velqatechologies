@echo off
echo ========================================
echo    REBUILDING WITH GOLD-WHITE THEME
echo ========================================

echo Building with new gold theme...
npm run build

if exist out (
    echo.
    echo ✅ Build successful with gold theme!
    echo.
    echo Creating deployment package...
    if exist gold-theme-package (
        rmdir /s /q gold-theme-package
    )
    mkdir gold-theme-package
    
    echo Copying website files...
    xcopy /E /I /Y out\* gold-theme-package\
    
    echo Creating .htaccess with CSS fix...
    copy CSS-FIX.htaccess gold-theme-package\.htaccess
    
    echo.
    echo ========================================
    echo    🎨 GOLD THEME PACKAGE READY!
    echo ========================================
    echo.
    echo Upload ALL files from 'gold-theme-package' to Hostinger
    echo Your website will have a beautiful gold-white theme!
    echo.
    
    start gold-theme-package
) else (
    echo ❌ Build failed - check errors above
)

pause