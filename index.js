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
console.log('  ');
console.log('  RG-CLI');
console.log('  ');

if (arg1 !== 'g' || arg2 !== 'c') {
  console.log('  Whoops! The only supported command for `rg` is currently `rg g c`, for generating components');
  console.log('  usage: `rg g c [component-name] --dir=path/to/components --type=[js|ts] --style=[css|scss]');
  
  process.exit(1);
}

fs.readFile(path.resolve(process.cwd(), 'rg.config.json'), (err, str) => {
  const options = {
    dir: path.join('src', 'components'),
    type: 'js',
    style: 'css',
  };

  const params = Object.keys(options);

  if (err) {
    console.log('  No rg.config.json file found in CWD');
  } else {
    console.log('  Found rg.config.json file');
    const config = JSON.parse(str);

    params.map((param) => {
      if (config[param] && !argv[param]) {
        options[param] = config[param];
        console.log(`  Using value from rg.config.json: ${param}=${options[param]}`);
      }
    });
  }
  
  params.map((param) => {
    if (argv[param]) {
      options[param] = argv[param];
      console.log(`  Using value from rg.config.json: ${param}=${options[param]}`);
    }
  });

  generateComponent(name, options);
});
