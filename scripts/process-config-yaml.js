const fs = require('fs');
const yaml = require('js-yaml');

try {
  const fileContents = fs.readFileSync('./public/local_config.yml', 'utf8');
  const data = yaml.safeLoadAll(fileContents);
  const yamlStr = yaml.safeDump(data[0]);
  fs.writeFileSync('./public/config.yml', yamlStr, 'utf8');
} catch (e) {
  console.log(e);
}
