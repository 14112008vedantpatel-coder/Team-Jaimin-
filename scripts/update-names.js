const fs = require('fs');
const path = require('path');

const dbJsPath = path.join(__dirname, '..', 'server', 'db.js');
if (fs.existsSync(dbJsPath)) {
  let content = fs.readFileSync(dbJsPath, 'utf8');
  content = content.replace(/Vedic Roots Enterprise Private Limited/gi, 'TEAM JAIMIN');
  content = content.replace(/Vedic Roots Wellness/gi, 'TEAM JAIMIN');
  content = content.replace(/Vedic Roots/gi, 'TEAM JAIMIN');
  content = content.replace(/Skillsutraa/gi, 'TEAM JAIMIN');
  content = content.replace(/Edtech Private Limited/gi, 'TEAM JAIMIN');
  content = content.replace(/Team Jamin/gi, 'TEAM JAIMIN');
  content = content.replace(/Team Jaimin/gi, 'TEAM JAIMIN');
  content = content.replace(/brand_name: '[^']*'/g, "brand_name: 'TEAM JAIMIN'");
  content = content.replace(/monogram: '[^']*'/g, "monogram: 'TJ'");
  fs.writeFileSync(dbJsPath, content, 'utf8');
  console.log('server/db.js updated successfully!');
}
