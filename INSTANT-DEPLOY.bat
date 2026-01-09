@echo off
echo ⚡ INSTANT DEPLOYMENT - NO TIME WASTE ⚡

rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul
rmdir /s /q .next 2>nul

copy package-final-complete.json package.json

npm install --legacy-peer-deps --silent --no-audit --no-fund

npm run build

if exist out (
    echo ✅ SUCCESS! Website ready in 'out' folder
) else (
    echo ❌ FAILED - Check errors above
)
pause