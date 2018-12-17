/**
 * text-input.component
 */
import * as React from 'react';
import './text-input.component.scss';

export interface ITextInputProps {
  children?: any;
}

export const TextInputComponent: React.SFC<ITextInputProps> = (props: ITextInputProps) => {
  return (
    <div className="text-input">
      TextInput
    </div>
  );
};
