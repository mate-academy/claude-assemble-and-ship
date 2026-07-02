const fs = require('fs');
const errors = [];

// 1. Manifest exists, is valid JSON, and has a name.
const manifestPath = '.claude-plugin/plugin.json';
if (!fs.existsSync(manifestPath)) {
  errors.push('Missing .claude-plugin/plugin.json — create the manifest at that path.');
} else {
  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } catch (e) {
    errors.push('.claude-plugin/plugin.json is not valid JSON: ' + e.message);
  }
  if (manifest !== undefined && (typeof manifest !== 'object' || manifest === null || !manifest.name || typeof manifest.name !== 'string')) {
    errors.push('plugin.json must include a non-empty "name".');
  }
}

// 2. Component folders must sit at the root, not inside .claude-plugin/.
for (const dir of ['commands', 'agents', 'skills', 'hooks']) {
  if (fs.existsSync('.claude-plugin/' + dir)) {
    errors.push('"' + dir + '/" is inside .claude-plugin/ — move it to the repo root. Only plugin.json belongs in .claude-plugin/.');
  }
}

// 3. At least one component at the root.
const hasComponent = ['commands', 'agents', 'skills', 'hooks'].some(
  (dir) => fs.existsSync(dir) && fs.statSync(dir).isDirectory() && fs.readdirSync(dir).length > 0
);
if (!hasComponent) {
  errors.push('No components found — add at least one (commands/ or agents/) at the repo root.');
}

if (errors.length) {
  console.error('Plugin validation failed:');
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log('Plugin looks valid \u2713');
