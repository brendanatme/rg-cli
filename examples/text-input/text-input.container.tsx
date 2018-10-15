import * as React from 'react';
import { ITextInputProps, TextInputComponent } from './text-input.component';

export class TextInput extends React.Component<ITextInputProps> {
  public render() {
    return (
      <TextInputComponent {...this.props} />
    );
  }
}
