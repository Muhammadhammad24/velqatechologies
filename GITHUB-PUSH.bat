@echo off
echo ========================================
echo    GITHUB PUSH - AUTOMATED
echo ========================================

echo Setting up Git configuration...
git config --global user.name "Muhammadhammad24"
git config --global user.email "muhammadhammad24@gmail.com"

echo Adding all files...
git add .

echo Committing changes...
git commit -m "🚀 Production Ready: All deployment issues fixed - Zero errors build"

echo Pushing to GitHub...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo ✅ SUCCESS! Code pushed to GitHub
    echo Now go to Hostinger and deploy from GitHub
) else (
    echo ❌ Authentication failed
    echo Please enter your GitHub credentials when prompted
    echo Or use GitHub Desktop to push the changes
)

pause