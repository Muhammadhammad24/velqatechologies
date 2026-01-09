@echo off
echo 🚀 COMPLETE CLEAN DEPLOYMENT PROCESS...

echo 🧹 Removing all cached files...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

echo 📦 Installing dependencies with force and legacy peer deps...
npm install --legacy-peer-deps --force

echo 🔨 Building project...
npm run build

if exist out (
    echo ✅ Build successful! Static files generated.
    echo 📁 Contents of 'out' folder:
    dir out /b
) else (
    echo ❌ Build failed - no 'out' folder found
)

pause