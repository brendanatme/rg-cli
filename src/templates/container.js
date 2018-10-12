const { ClassCase } = require('../helpers');

module.exports = (name) => `import * as React from 'react';
import { ${ClassCase(name)}Component } from './${name}.component';

export class ${ClassCase(name)} extends React.Component {
  public render() {
    return (
      <${ClassCase(name)}Component {...this.props} />
    );
  }
}`;
