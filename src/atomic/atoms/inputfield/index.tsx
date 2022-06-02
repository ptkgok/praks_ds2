import React, { useId } from 'react';
import { InputProps } from './props';
import * as Component from './styles';

const InputField: React.FC<InputProps> = ({ ...props }) => {
  const id = useId();
  return (
    <Component.ContainerGroup>
      <Component.Label htmlFor={id}>{props.label}</Component.Label>
      <Component.Container id={id}>
        {props.icon && <i>{props.icon}</i>}
        <Component.Field />
        <Component.StatusField>status</Component.StatusField>
      </Component.Container>
    </Component.ContainerGroup>
  );
};

export { InputField, InputProps };
