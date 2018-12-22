/**
 * component
 * 
 * make a component
 * or, more specifically, a folder with the prerequisite files to make a component:
 * 
 * mkdir [dir]/[name]/
 * touch [dir]/[name]/index.${type}
 * touch [dir]/[name]/[name].container.${type}x
 * touch [dir]/[name]/[name].component.${type}x
 * touch [dir]/[name]/[name].component.${style}
 * touch [dir]/[name]/[name].spec.${type}x
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
  const style = options.style;

  console.log('  Generating component...');
  
  if (!name) {
    console.log('  ');
    console.log('  Whoops! please enter a name for your component.');
    console.log('  Example usage: `rg g c my-component-name`');
    console.log('  ');
  
    process.exit(1);
  }
  
  const componentDir = path.resolve(options.dir, name);
  
  console.log(`  Making dir... ${componentDir}`);
  execSync(`mkdir ${componentDir}`);
  
  console.log(`  Making ${name}.component.${style}...`);
  fs.writeFileSync(`${componentDir}/${name}.component.${style}`, render.style(name));
  
  console.log(`  Making ${name}.component.${ext}x...`);
  fs.writeFileSync(`${componentDir}/${name}.component.${ext}x`, render.component(name, style));
  
  console.log(`  Making ${name}.container.${ext}x...`);
  fs.writeFileSync(`${componentDir}/${name}.container.${ext}x`, render.container(name));
  
  // console.log(`making ${name}.test.${ext}x...`);
  // fs.writeFileSync(`echo "${render.test(name)}" >> ${componentDir}/${name}.test.${ext}x`);
  
  console.log(`  Making index.${ext}...`);
  fs.writeFileSync(`${componentDir}/index.${ext}`, render.mod(name));
  
  console.log('  Success!');
  console.log(' ');
  console.log('    Include your component like so:');
  console.log(' ');
  if (ext === 'ts') {
    console.log(`    import { ${ClassCase(name)} } from '~/components/${name}';`);
  } else {
    console.log(`    import ${ClassCase(name)} from '~/components/${name}';`);
  }
  console.log('  ');
  console.log('-------------------');
};

module.exports = generateComponent;
