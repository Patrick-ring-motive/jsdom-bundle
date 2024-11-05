const fs = require("fs");
const path = require("path");

// Recursively walk through directories
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

// Function to remove 'node:' prefix in files
function removeNodePrefix(filePath) {
  // Read the file content
  let content = fs.readFileSync(filePath, "utf8");

  // Replace 'node:' prefix with ''
  const updatedContent = content.replace(/\bnode:(\w+)/g, "$1");

  // Only write if changes were made
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, "utf8");
    console.log(`Updated: ${filePath}`);
  }
}

// Starting directory: node_modules
const nodeModulesDir = path.join(__dirname, "node_modules");
if (fs.existsSync(nodeModulesDir)) {
  console.log('Removing "node:" prefixes in node_modules...');
  walkDir(nodeModulesDir, removeNodePrefix);
  console.log("Prefix removal complete.");
} else {
  console.error(
    "node_modules directory not found. Please run npm install first.",
  );
}
