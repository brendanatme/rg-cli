/**
 * text-input.component
 */
import * as React from 'react';
import './text-input.component.scss';

export interface ITextInputProps {
  children?: any;
  className?: string;
}

export const TextInputComponent: React.SFC<ITextInputProps> = (props: ITextInputProps) => {
  const className = props.className || '';
  return (
    <div className={`text-input ${className}`}>
      TextInput
    </div>
  );
};