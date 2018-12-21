/**
 * text-input.container
 */
import React from 'react';
import TextInputComponent from './text-input.component';

export default class TextInput extends React.Component {
  render() {
    return (
      <TextInputComponent {...this.props} />
    );
  }
}