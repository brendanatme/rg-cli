#!/usr/bin/env node

/**
 * rg-cli
 * 
 * provide CLI for generating react components quickly
 */
const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const generateComponent = require('./src/generate-component');

const [arg1, arg2, name] = argv._;

console.log('-------------------');
console.log(' ');
console.log(' RG-CLI');
console.log(' ');

if (arg1 !== 'g' || arg2 !== 'c') {
  console.log(' Whoops! The only supported command for `rg` is currently `rg g c`, for generating components');
  console.log(' usage: `rg g c [component-name] --dir=path/to/components --type=[js|ts]');
  
  process.exit(1);
}

fs.readFile(path.resolve(process.cwd(), 'rg.config.json'), (err, str) => {
  const options = {
    dir: path.join('src', 'components'),
    type: 'js',
  };

  if (err) {
    console.log(' No rg.config.json file found in CWD');
  } else {
    console.log(' Found rg.config.json file');
    const config = JSON.parse(str);

    if (config.dir && !argv.dir) {
      options.dir = config.dir;
      console.log(` Using value from rg.config.json: dir=${options.dir}`);
    }

    if (config.type && !argv.type) {
      options.type = config.type;
      console.log(` Using value from rg.config.json: type=${options.type}`);
    }
  }
  
  if (argv.dir) {
    options.dir = argv.dir;
    console.log(` Using value from CLI arg: dir=${options.dir}`);
  }

  if (argv.type) {
    options.type = argv.type;
    console.log(` Using value from CLI arg: type=${options.type}`);
  }

  generateComponent(name, options);
});
