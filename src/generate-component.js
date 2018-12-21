/**
 * component
 * 
 * make a component
 * or, more specifically, a folder with the prerequisite files to make a component:
 * 
 * mkdir [dir]/[name]/
 * touch [dir]/[name]/index.${ext}
 * touch [dir]/[name]/[name].container.${ext}x
 * touch [dir]/[name]/[name].component.${ext}x
 * touch [dir]/[name]/[name].component.scss
 * touch [dir]/[name]/[name].spec.${ext}x
 * 
 * usage:
 * rg g c [name]
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { ClassCase } = require('./helpers');
const templates = require('./templates');

const generateComponent = (name, options) => {
  const ext = options.type;
  const render = templates[ext];

  console.log(' Generating component...');
  
  if (!name) {
    console.log('Whoops! please enter a name for your component.');
    console.log('Example usage: `rg g c my-component-name`');
  
    process.exit(1);
  }
  
  const componentDir = path.resolve(options.dir, name);
  
  console.log(` Making dir... ${componentDir}`);
  execSync(`mkdir ${componentDir}`);
  
  console.log(` Making ${name}.component.scss...`);
  fs.writeFileSync(`${componentDir}/${name}.component.scss`, render.scss(name));
  
  console.log(` Making ${name}.component.${ext}x...`);
  fs.writeFileSync(`${componentDir}/${name}.component.${ext}x`, render.component(name));
  
  console.log(` Making ${name}.container.${ext}x...`);
  fs.writeFileSync(`${componentDir}/${name}.container.${ext}x`, render.container(name));
  
  // console.log(`making ${name}.test.${ext}x...`);
  // fs.writeFileSync(`echo "${render.test(name)}" >> ${componentDir}/${name}.test.${ext}x`);
  
  console.log(` Making index.${ext}...`);
  fs.writeFileSync(`${componentDir}/index.${ext}`, render.mod(name));
  
  console.log(' Success!');
  console.log(' Include your component like so:');
  console.log(' ');
  if (ext === 'ts') {
    console.log(`   import { ${ClassCase(name)} } from '~/components/${name}';`);
  } else {
    console.log(`   import ${ClassCase(name)} from '~/components/${name}';`);
  }
  console.log(' ');
  console.log('-------------------');
};

module.exports = generateComponent;
