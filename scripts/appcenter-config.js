const fs = require('fs');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env.prod')});

const config = {
  AppSecret: process.env.APP_SECRET,
};

fs.writeFileSync(
  path.resolve(
    __dirname,
    '../android/app/src/main/assets/appcenter-config.json',
  ),
  JSON.stringify(config),
);