const { ClassCase } = require('../../helpers');

module.exports = (name, style) => `/**
 * ${name}.component
 */
import React from 'react';
import './${name}.component.${style}';

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
