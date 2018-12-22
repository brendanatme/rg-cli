const { ClassCase } = require('../../helpers');

module.exports = (name, style) => `/**
 * ${name}.component
 */
import * as React from 'react';
import './${name}.component.${style}';

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
