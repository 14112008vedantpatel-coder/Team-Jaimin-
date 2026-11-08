const fs = require('fs');
const path = require('path');

// 1. Update database.json
const dbPath = path.join(__dirname, '..', 'server', 'data', 'database.json');
if (fs.existsSync(dbPath)) {
  let dbStr = fs.readFileSync(dbPath, 'utf8');

  // Replace company names and variations
  dbStr = dbStr.replace(/Vedic Roots Enterprise Private Limited/gi, 'TEAM JAIMIN');
  dbStr = dbStr.replace(/Vedic Roots Wellness/gi, 'TEAM JAIMIN');
  dbStr = dbStr.replace(/Vedic Roots/gi, 'TEAM JAIMIN');
  dbStr = dbStr.replace(/vedicroots-demo\.in/gi, 'teamjaimin.com');
  dbStr = dbStr.replace(/Skillsutraa/gi, 'TEAM JAIMIN');
  dbStr = dbStr.replace(/Edtech Private Limited/gi, 'TEAM JAIMIN');
  dbStr = dbStr.replace(/"brand_name":\s*"[^"]*"/g, '"brand_name": "TEAM JAIMIN"');
  dbStr = dbStr.replace(/"monogram":\s*"[^"]*"/g, '"monogram": "TJ"');
  dbStr = dbStr.replace(/Team Jamin/g, 'TEAM JAIMIN');
  dbStr = dbStr.replace(/Team Jaimin/g, 'TEAM JAIMIN');
  dbStr = dbStr.replace(/teamjamin\.com/g, 'teamjaimin.com');
  dbStr = dbStr.replace(/teamjamin_official/g, 'teamjaimin_official');
  dbStr = dbStr.replace(/@teamjamin/g, '@teamjaimin');
  dbStr = dbStr.replace(/t\.me\/teamjamin/g, 't.me/teamjaimin');
  dbStr = dbStr.replace(/24AAACV1234F1Z5/g, '24AAACT1234F1Z5');

  fs.writeFileSync(dbPath, dbStr, 'utf8');
  console.log('Updated server/data/database.json');
}

// 2. Update server/db.js defaults
const dbJsPath = path.join(__dirname, '..', 'server', 'db.js');
if (fs.existsSync(dbJsPath)) {
  let dbJs = fs.readFileSync(dbJsPath, 'utf8');
  dbJs = dbJs.replace(/Vedic Roots Enterprise Private Limited/gi, 'TEAM JAIMIN');
  dbJs = dbJs.replace(/Vedic Roots Wellness/gi, 'TEAM JAIMIN');
  dbJs = dbJs.replace(/Vedic Roots/gi, 'TEAM JAIMIN');
  dbJs = dbJs.replace(/vedicroots-demo\.in/gi, 'teamjaimin.com');
  dbJs = dbJs.replace(/Skillsutraa/gi, 'TEAM JAIMIN');
  dbJs = dbJs.replace(/Edtech Private Limited/gi, 'TEAM JAIMIN');
  dbJs = dbJs.replace(/Team Jamin/g, 'TEAM JAIMIN');
  dbJs = dbJs.replace(/Team Jaimin/g, 'TEAM JAIMIN');
  dbJs = dbJs.replace(/teamjamin\.com/g, 'teamjaimin.com');
  dbJs = dbJs.replace(/teamjamin/g, 'teamjaimin');
  fs.writeFileSync(dbJsPath, dbJs, 'utf8');
  console.log('Updated server/db.js');
}

console.log('Database files updated successfully.');
