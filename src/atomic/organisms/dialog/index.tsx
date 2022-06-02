import React from 'react';
import { DialogProps } from './props';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as Component from './styles';
import { Button } from '../../atoms/button';

const Dialog: React.FC<DialogProps> = ({ children }) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button>Open Dialog</Button>
      </DialogPrimitive.Trigger>
      <Component.StyledOverlay />
      <Component.StyledContent>
        <div>{children}</div>
        <DialogPrimitive.Close asChild>
          <Button size="fullWidth">Allow</Button>
        </DialogPrimitive.Close>
      </Component.StyledContent>
    </DialogPrimitive.Root>
  );
};

export { Dialog };
