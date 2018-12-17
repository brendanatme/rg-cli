const { ClassCase } = require('../../helpers');

module.exports = (name) => `/**
 * ${name}.component
 */
import * as React from 'react';
import './${name}.component.scss';

export interface I${ClassCase(name)}Props {
  children?: any;
}

export const ${ClassCase(name)}Component: React.SFC<I${ClassCase(name)}Props> = (props: I${ClassCase(name)}Props) => {
  return (
    <div className=\\"${name}\\">
      ${ClassCase(name)}
    </div>
  );
};`;
