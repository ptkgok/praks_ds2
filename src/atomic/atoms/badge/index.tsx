import React from 'react';
import { BadgeProps } from './props';
import * as Component from './styles';

const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
  return (
    <Component.Container {...props}>
      {props.icon && <i>{props.icon}</i>}
      {children && <span>{children.toString()}</span>}
    </Component.Container>
  );
};

export { BadgeProps, Badge };
