const { ClassCase } = require('../../helpers');

module.exports = (name) => `/**
 * ${name}.component
 */
import React from 'react';
import './${name}.component.scss';

export default ({
  // children,
  className = '',
}) => {
  return (
    <div className={\`${name} \${className}\`}>
      ${ClassCase(name)}
    </div>
  );
};`;
