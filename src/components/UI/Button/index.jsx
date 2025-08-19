import React from 'react';
import './Button.scss';

function Button({ children, as = 'button', variant = 'primary', full = false, ...props }) {
  const Component = as;
  const classes = ['ui-button', `ui-button--${variant}`, full ? 'ui-button--full' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Button;
