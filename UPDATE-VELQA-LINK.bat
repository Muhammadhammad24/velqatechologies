@echo off
echo ========================================
echo    UPDATING VELQA PUBLISHERS LINK
echo ========================================

echo Building with updated external link...
npm run build

if exist out (
    echo.
    echo ✅ Build successful with external Velqa Publishers link!
    echo.
    echo Creating deployment package...
    if exist velqa-link-update (
        rmdir /s /q velqa-link-update
    )
    mkdir velqa-link-update
    
    echo Copying website files...
    xcopy /E /I /Y out\* velqa-link-update\
    
    echo Creating .htaccess...
    copy CSS-FIX.htaccess velqa-link-update\.htaccess
    
    echo.
    echo ========================================
    echo    🔗 VELQA PUBLISHERS LINK UPDATED!
    echo ========================================
    echo.
    echo Now Velqa Publishers redirects to: https://velqapublishers.com/index.html
    echo Upload 'velqa-link-update' folder contents to Hostinger
    echo.
    
    start velqa-link-update
) else (
    echo ❌ Build failed - check errors above
)

pause