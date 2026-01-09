@echo off
echo 🧪 Testing build process...

echo 📦 Installing dependencies...
npm install

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