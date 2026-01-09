@echo off
echo 🚀 FINAL DEPLOYMENT FIX...

echo 🧹 Complete cleanup...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

echo 📋 Using fixed package.json with exact versions...
copy package-fixed.json package.json

echo 📦 Installing with exact versions and legacy peer deps...
npm install --legacy-peer-deps --no-package-lock

echo 🔨 Building project...
npm run build

if exist out (
    echo ✅ SUCCESS! Build completed with static files.
    echo 📁 Generated files:
    dir out /b
) else (
    echo ❌ Build failed - checking for errors...
    echo 📋 Current dependencies:
    npm list --depth=0
)

pause