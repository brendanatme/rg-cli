const { ClassCase } = require('../../helpers');

module.exports = (name) => `/**
 * ${name}.container
 */
import React from 'react';
import ${ClassCase(name)}Component from './${name}.component';

export default class ${ClassCase(name)} extends React.Component {
  render() {
    return (
      <${ClassCase(name)}Component {...this.props} />
    );
  }
}`;
