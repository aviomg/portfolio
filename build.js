const fs = require('fs');
const path = require('path');

// Paths
const SOURCE_DIR = path.resolve(__dirname); // Root directory
const PUBLIC_DIR = path.resolve(__dirname, 'public'); // Target directory

// Clean public directory
function cleanPublicDir() {
    if (fs.existsSync(PUBLIC_DIR)) {
      fs.rmSync(PUBLIC_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(PUBLIC_DIR);
  }

  function copyFiles() {
    const files = fs.readdirSync(SOURCE_DIR);
  
    files.forEach((file) => {
      const sourcePath = path.join(SOURCE_DIR, file);
      const targetPath = path.join(PUBLIC_DIR, file);
  
      if (fs.lstatSync(sourcePath).isDirectory() && file !== 'public') {
        // Recursively copy subdirectories
        fs.cpSync(sourcePath, path.join(PUBLIC_DIR, file), { recursive: true });
      } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js') || file === 'index.html') {
        // Copy relevant files to /public
        fs.copyFileSync(sourcePath, targetPath);
      }
    });
  }

  function updateFilePaths() {
    const htmlFiles = fs.readdirSync(PUBLIC_DIR).filter((file) => file.endsWith('.html'));
  
    htmlFiles.forEach((file) => {
      const filePath = path.join(PUBLIC_DIR, file);
      let content = fs.readFileSync(filePath, 'utf8');
  
      // Update relative paths
      content = content.replace(/src="\.\//g, 'src="./');
      content = content.replace(/href="\.\//g, 'href="./');
  
      fs.writeFileSync(filePath, content, 'utf8');
    });
  }

  function build() {
    console.log('Building project...');
    cleanPublicDir();
    copyFiles();
    updateFilePaths();
    console.log('Build completed successfully.');
  }
  
  build();