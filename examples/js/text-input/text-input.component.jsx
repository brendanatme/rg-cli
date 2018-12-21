/**
 * text-input.component
 */
import React from 'react';
import './text-input.component.scss';

export default ({
  // children,
  className = '',
}) => {
  return (
    <div className={`text-input ${className}`}>
      TextInput
    </div>
  );
};