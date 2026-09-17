const fs = require('fs');
const errors = [];
const COMPONENT_DIRS = ['commands', 'agents', 'skills', 'hooks'];

try {
  // 1. Manifest exists, is valid JSON, and has a name.
  const manifestPath = '.claude-plugin/plugin.json';
  if (!fs.existsSync(manifestPath)) {
    errors.push('Missing .claude-plugin/plugin.json — create the manifest at that path.');
  } else {
    let manifest;
    let parsed = false;
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      parsed = true;
    } catch (e) {
      errors.push('.claude-plugin/plugin.json is not valid JSON: ' + e.message);
    }
    if (parsed && (typeof manifest !== 'object' || manifest === null || Array.isArray(manifest) || !manifest.name || typeof manifest.name !== 'string')) {
      errors.push('plugin.json must include a non-empty "name".');
    }
  }

  // 2. Component folders must sit at the root, not inside .claude-plugin/.
  for (const dir of COMPONENT_DIRS) {
    if (fs.existsSync('.claude-plugin/' + dir)) {
      errors.push('"' + dir + '/" is inside .claude-plugin/ — move it to the repo root. Only plugin.json belongs in .claude-plugin/.');
    }
  }

  // 3. At least one component at the root.
  const hasComponent = COMPONENT_DIRS.some(
    (dir) => fs.existsSync(dir) && fs.readdirSync(dir).length > 0
  );
  if (!hasComponent) {
    errors.push('No components found — add at least one (commands/ or agents/) at the repo root.');
  }
} catch (e) {
  errors.push('Validation script crashed: ' + e.message);
}

if (errors.length) {
  console.error('Plugin validation failed:');
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log('Plugin looks valid ✓');
