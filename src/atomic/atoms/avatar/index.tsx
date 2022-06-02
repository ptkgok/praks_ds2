import React, { useId } from 'react';
import * as Component from './styles';
import { AvatarProps } from './props';

export const Avatar: React.FC<AvatarProps> = ({ url, ...props }) => {
  const id = useId();

  return (
    <Component.Container>
      <Component.Image src={url} />
      {props.withHoverPopover && (
        <Component.HoverPopoverContainer>
          {props.optionsPopover?.map((option) => (
            <li key={id}>
              <a href={option.path}>{option.label}</a>
            </li>
          ))}
        </Component.HoverPopoverContainer>
      )}
    </Component.Container>
  );
};

export { AvatarProps };
