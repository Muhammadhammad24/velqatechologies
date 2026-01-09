@echo off
echo ========================================
echo    AUTOMATED GITHUB PUSH
echo ========================================

echo Configuring Git...
git config --global user.name "Muhammadhammad24"
git config --global user.email "hammadsheikh241997@gmail.com"

echo Adding files...
git add .

echo Committing...
git commit -m "🚀 Production deployment ready - All issues fixed"

echo.
echo ========================================
echo    PUSHING TO GITHUB...
echo ========================================
echo.
echo When prompted for credentials, enter:
echo Username: Muhammadhammad24
echo Password: [Your GitHub Token or Password]
echo.

git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo    ✅ SUCCESS! PUSHED TO GITHUB
    echo ========================================
    echo.
    echo Next: Go to Hostinger and deploy from GitHub
    echo URL: https://hpanel.hostinger.com/websites/slategrey-shrew-790159.hostingersite.com
) else (
    echo.
    echo ========================================
    echo    ❌ PUSH FAILED
    echo ========================================
    echo.
    echo Try using GitHub Desktop or create Personal Access Token
)

pause