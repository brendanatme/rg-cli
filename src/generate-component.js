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
const path = require('path');
const { execSync } = require('child_process');
const { ClassCase } = require('./helpers');
const templates = require('./templates');

const generateComponent = (name, isTS, dir) => {
  const ext = isTS ? 'ts' : 'js';
  const render = templates[ext];

  console.log('rg-cli: Generating component...');
  
  if (!name) {
    console.log('Whoops! please enter a name for your component.');
    console.log('Example usage: `rg g c my-component-name`');
  
    process.exit(1);
  }
  
  const componentsDir = dir && dir.length
    ? path.resolve(process.cwd(), dir)
    : path.resolve(process.cwd(), 'src', 'components');
  const componentDir = path.resolve(componentsDir, name);
  
  console.log(`Making dir... ${componentDir}`);
  execSync(`mkdir ${componentDir}`);
  
  console.log(`making ${name}.component.scss...`);
  execSync(`echo "${render.scss(name)}" >> ${componentDir}/${name}.component.scss`);
  
  console.log(`making ${name}.component.${ext}x...`);
  execSync(`echo "${render.component(name)}" >> ${componentDir}/${name}.component.${ext}x`);
  
  console.log(`making ${name}.container.${ext}x...`);
  execSync(`echo "${render.container(name)}" >> ${componentDir}/${name}.container.${ext}x`);
  
  // console.log(`making ${name}.test.${ext}x...`);
  // execSync(`echo "${render.test(name)}" >> ${componentDir}/${name}.test.${ext}x`);
  
  console.log(`making index.${ext}...`);
  execSync(`echo "${render.mod(name)}" >>  ${componentDir}/index.${ext}`);
  
  console.log('success!');
  console.log('include your component like so:');
  console.log('');
  if (ext === 'ts') {
    console.log(`  import { ${ClassCase(name)} } from '~/components/${name}';`);
  } else {
    console.log(`  import ${ClassCase(name)} from '~/components/${name}';`);
  }
  console.log('');
};

module.exports = generateComponent;
