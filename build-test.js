const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing build process...');

try {
  // Run the build
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Check if out directory exists
  const outDir = path.join(__dirname, 'out');
  if (fs.existsSync(outDir)) {
    console.log('✅ Build successful! Static files generated in "out" folder.');
    
    // List some key files
    const files = fs.readdirSync(outDir);
    console.log('📁 Generated files:', files.slice(0, 10).join(', '));
    
    if (files.length > 10) {
      console.log(`   ... and ${files.length - 10} more files`);
    }
  } else {
    console.log('❌ Build failed - no "out" folder found');
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}