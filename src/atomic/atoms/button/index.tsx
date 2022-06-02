import React from 'react';
import { ButtonProps } from './props';
import * as Component from './styles';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Component.Container {...props}>
      {props.icon && <i>{props.icon}</i>}
      {children && <span>{children.toString().toLocaleUpperCase()}</span>}
    </Component.Container>
  );
};

export { ButtonProps, Button };
