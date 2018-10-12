const { ClassCase } = require('../helpers');

module.exports = (name) => `// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { ${ClassCase(name)} } from './${name}.container';`;
