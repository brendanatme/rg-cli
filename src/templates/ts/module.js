const { ClassCase } = require('../../helpers');

module.exports = (name) => `export { ${ClassCase(name)} } from './${name}.container';`;
