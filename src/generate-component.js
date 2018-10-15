/**
 * component
 * 
 * make a component
 * or, more specifically, a folder with the prerequisite files to make a component:
 * 
 * mkdir [dir]/[name]/
 * touch [dir]/[name]/index.ts
 * touch [dir]/[name]/[name].container.tsx
 * touch [dir]/[name]/[name].component.tsx
 * touch [dir]/[name]/[name].component.scss
 * touch [dir]/[name]/[name].spec.tsx
 * 
 * usage:
 * rg g c [name]
 */
const path = require('path');
const { execSync } = require('child_process');
const { ClassCase } = require('./helpers');
const {
  component,
  container,
  mod,
  scss,
  test,
} = require('./templates');

const generateComponent = (name, dir) => {
  console.log('RG-CLI: Generating component...');
  
  if (!name) {
    console.log('Whoops! please enter a name for your component.');
    console.log('Example usage: `rg g c my-component-name`');
  
    process.exit(1);
  }
  
  const componentsDir = dir || path.resolve(process.cwd(), 'src', 'components');
  const componentDir = path.resolve(componentsDir, name);
  
  console.log(`Making dir... ${componentDir}`);
  execSync(`mkdir ${componentDir}`);
  
  console.log(`making ${name}.component.scss...`);
  execSync(`echo "${scss(name)}" >> ${componentDir}/${name}.component.scss`);
  
  console.log(`making ${name}.component.tsx...`);
  execSync(`echo "${component(name)}" >> ${componentDir}/${name}.component.tsx`);
  
  console.log(`making ${name}.container.tsx...`);
  execSync(`echo "${container(name)}" >> ${componentDir}/${name}.container.tsx`);
  
  console.log(`making ${name}.test.tsx...`);
  execSync(`echo "${test(name)}" >> ${componentDir}/${name}.test.tsx`);
  
  console.log(`making index.ts...`);
  execSync(`echo "${mod(name)}" >>  ${componentDir}/index.ts`);
  
  console.log('success!');
  console.log('include your component like so:');
  console.log('');
  console.log(`  import { ${ClassCase(name)} } from '~/components/${name}';`);
  console.log('');
};

module.exports = generateComponent;
