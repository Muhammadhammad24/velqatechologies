@echo off
echo ========================================
echo    VELQA WEBSITE - FINAL DEPLOYMENT
echo ========================================

echo.
echo [1/5] Complete cleanup...
if exist node_modules (
    echo Removing node_modules...
    rmdir /s /q node_modules
)
if exist package-lock.json (
    echo Removing package-lock.json...
    del package-lock.json
)
if exist .next (
    echo Removing .next...
    rmdir /s /q .next
)

echo.
echo [2/5] Using complete package.json...
copy package-complete.json package.json
echo Package.json updated with all dependencies

echo.
echo [3/5] Installing all dependencies...
npm install --legacy-peer-deps --no-audit --no-fund

echo.
echo [4/5] Building the project...
npm run build

echo.
echo [5/5] Checking results...
if exist out (
    echo.
    echo ========================================
    echo    ✅ SUCCESS! BUILD COMPLETED!
    echo ========================================
    echo.
    echo Static files generated in 'out' folder:
    dir out /b
    echo.
    echo Your website is ready for deployment!
) else (
    echo.
    echo ========================================
    echo    ❌ BUILD FAILED
    echo ========================================
    echo.
    echo Check the error messages above.
)

echo.
pause