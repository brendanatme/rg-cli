const { ClassCase } = require('../helpers');

module.exports = (name) => `import * as React from 'react';
import './${name}.component.scss';

export const ${ClassCase(name)}Component: React.SFC = (props) => {
  return (
    <div className=\\"${name}\\">
      ${ClassCase(name)}
    </div>
  );
};`;
