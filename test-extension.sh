#!/bin/bash

# Test script for Copilot Continue Chrome Extension
# This script helps verify that all required files are present and properly formatted

echo "🧪 Testing Copilot Continue Chrome Extension"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "manifest.json" ]; then
    echo "❌ Error: manifest.json not found. Run this script from the extension directory."
    exit 1
fi

echo "✅ Found manifest.json"

# Check for required files
required_files=("content.js" "popup.html" "popup.js")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ Found $file"
    else
        echo "❌ Missing $file"
        exit 1
    fi
done

# Check for icon files
icon_files=("icons/icon16.png" "icons/icon32.png" "icons/icon48.png" "icons/icon128.png")
for icon in "${icon_files[@]}"; do
    if [ -f "$icon" ]; then
        echo "✅ Found $icon"
    else
        echo "❌ Missing $icon"
        exit 1
    fi
done

# Validate manifest.json
echo ""
echo "📋 Manifest validation:"
if command -v jq &> /dev/null; then
    if jq . manifest.json > /dev/null 2>&1; then
        echo "✅ manifest.json is valid JSON"
        
        # Check manifest version
        manifest_version=$(jq -r '.manifest_version' manifest.json)
        if [ "$manifest_version" = "3" ]; then
            echo "✅ Using Manifest V3"
        else
            echo "⚠️  Warning: Not using Manifest V3 (found version $manifest_version)"
        fi
        
        # Check required permissions
        if jq -e '.permissions[]' manifest.json | grep -q "activeTab"; then
            echo "✅ Has activeTab permission"
        else
            echo "❌ Missing activeTab permission"
        fi
        
        if jq -e '.host_permissions[]' manifest.json | grep -q "*://*/*"; then
            echo "✅ Has host permissions for all URLs"
        else
            echo "❌ Missing host permissions"
        fi
    else
        echo "❌ manifest.json is not valid JSON"
        exit 1
    fi
else
    echo "⚠️  jq not available, skipping JSON validation"
fi

# Check file sizes
echo ""
echo "📊 File sizes:"
for file in manifest.json content.js popup.html popup.js; do
    size=$(wc -c < "$file" 2>/dev/null || echo "0")
    echo "   $file: ${size} bytes"
done

echo ""
echo "🎉 All checks passed! Your Chrome extension is ready."
echo ""
echo "📦 Installation instructions:"
echo "1. Open Chrome and go to chrome://extensions/"
echo "2. Enable 'Developer mode' (toggle in top right)"
echo "3. Click 'Load unpacked'"
echo "4. Select this directory: $(pwd)"
echo ""
echo "🔧 Testing instructions:"
echo "1. Open VS Code in browser (vscode.dev, github.dev, etc.)"
echo "2. Start using GitHub Copilot"
echo "3. Check browser console for '[Copilot Continue]' messages"
echo "4. Click the extension icon to see status"
