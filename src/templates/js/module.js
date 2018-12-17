const { ClassCase } = require('../../helpers');

module.exports = (name) => `import ${ClassCase(name)} from './${name}.container';
export default ${ClassCase(name)};`;
