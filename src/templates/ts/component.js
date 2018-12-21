const { ClassCase } = require('../../helpers');

module.exports = (name) => `/**
 * ${name}.component
 */
import * as React from 'react';
import './${name}.component.scss';

export interface I${ClassCase(name)}Props {
  children?: any;
  className?: string;
}

export const ${ClassCase(name)}Component: React.SFC<I${ClassCase(name)}Props> = (props: I${ClassCase(name)}Props) => {
  const className = props.className || '';
  return (
    <div className={\`${name} $\{className}\`}>
      ${ClassCase(name)}
    </div>
  );
};`;
