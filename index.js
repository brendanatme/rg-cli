#!/usr/bin/env node

/**
 * rg-cli
 */
const argv = require('minimist')(process.argv.slice(2));
const generateComponent = require('./src/generate-component');

const [arg1, arg2, name] = argv._;

if (arg1 !== 'g' || arg2 !== 'c') {
  console.log('Whoops! The only supported command for `rg` is currently `rg g c`, for generating components');
  console.log('Example usage: `rg g c text-input --dir=/my/favouritest/dir/ever');
  
  process.exit(1);
}

generateComponent(name, argv.ts, argv.dir);
