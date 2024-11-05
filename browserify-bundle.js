// browserify-bundle.js
const browserify = require('browserify');
const browserResolve = require('browser-resolve');
const fs = require('fs');
const path = require('path');

// Create the Browserify instance with custom resolution
const b = browserify(path.join(__dirname, 'src/index.js'), {
  basedir: __dirname,
  // Provide custom resolve function to handle 'node:url' alias
  resolve: function (id, opts, cb) {
    if (id === 'node:url') id = 'url';
    browserResolve(id, opts, (err, res) => {
      if (err) {
        console.error(`Error resolving module: ${id}`, err);
      }
      cb(err, res);
    });
  }
});

// Bundle and write to file
const outputPath = path.join(__dirname, 'dist/bundle.js');
b.bundle((err, buf) => {
  if (err) {
    console.error('Error during bundling:', err);
    return;
  }
  fs.writeFileSync(outputPath, buf);
  console.log('Bundling complete. Output written to', outputPath);
});
