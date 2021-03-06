import React from 'react';
import './Text.scss';


export function Text({ size, color, children, className }) {
  const fontSize = () => {
    if (size === 'small') {
      return '12px';
    } else if (size === 'medium') {
      return '14px';
    } else if (size === 'large') {
      return '16px';
    }
  };

  return (
    <p
      className={`text-base ${className}`}
      style={{
        fontSize: fontSize(),
        color,
      }}
    >
      {children}
    </p>
  );
}


export default Text;
