#!/usr/bin/env node
/**
 * watch.js
 * Watches taean/WIREFRAME.md for changes and auto-regenerates wireframe.html.
 *
 * Usage: npm run watch
 */

const chokidar = require('chokidar');
const path     = require('path');
const { execSync } = require('child_process');

const WIREFRAME_MD = path.join(__dirname, '../taean/WIREFRAME.md');

console.log('👀  Watching WIREFRAME.md for changes...');
console.log('    Edit taean/WIREFRAME.md and save — wireframe.html will auto-update.\n');

// Run once immediately on start
try {
  execSync('node ' + path.join(__dirname, 'generate.js'), { stdio: 'inherit' });
} catch (e) {
  console.error('Initial generation failed:', e.message);
}

chokidar.watch(WIREFRAME_MD, { ignoreInitial: true }).on('change', () => {
  console.log('\n📝  WIREFRAME.md changed — regenerating...');
  try {
    execSync('node ' + path.join(__dirname, 'generate.js'), { stdio: 'inherit' });
  } catch (e) {
    console.error('❌  Generation error:', e.message);
  }
});
