#!/bin/bash

echo "🚀 Starting deployment process..."

# Clean up existing node_modules and lock files
echo "🧹 Cleaning up existing dependencies..."
rm -rf node_modules
rm -f package-lock.json

# Install dependencies with legacy peer deps to resolve conflicts
echo "📦 Installing dependencies with legacy peer deps..."
npm install --legacy-peer-deps

# Run build
echo "🏗️ Building the application..."
npm run build

echo "✅ Deployment completed successfully!"