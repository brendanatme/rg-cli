const { ClassCase } = require('../helpers');

module.exports = (name) => `/**
* ${name}.container
*/
import * as React from 'react';
import { I${ClassCase(name)}Props, ${ClassCase(name)}Component } from './${name}.component';

export class ${ClassCase(name)} extends React.Component<I${ClassCase(name)}Props> {
  public render() {
    return (
      <${ClassCase(name)}Component {...this.props} />
    );
  }
}`;
