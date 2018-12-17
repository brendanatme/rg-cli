const { ClassCase } = require('../../helpers');

module.exports = (name) => `/**
 * ${name}.component
 */
import React from 'react';
import './${name}.component.scss';

export default ({

}) => {
  return (
    <div className=\\"${name}\\">
      ${ClassCase(name)}
    </div>
  );
};`;
