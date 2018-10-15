import * as React from 'react';
import { TextInputComponent } from './text-input.component';

export class TextInput extends React.Component {
  public render() {
    return (
      <TextInputComponent {...this.props} />
    );
  }
}
