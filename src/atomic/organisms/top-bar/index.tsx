import React from 'react';
import * as Component from './styles';

import { TopBarProps } from './props';
import { Button } from '../../atoms/button';

export const TopBar: React.FC<TopBarProps> = ({
  menuOptions,
  loggedIn,
  loggedContent,
}) => {
  return (
    <Component.Container>
      <Component.LeftSide>
        <img
          src="https://res.cloudinary.com/code-comunity/image/upload/v1644321058/praks/logo_rvkjov.png"
          alt=""
        />
      </Component.LeftSide>
      <Component.RightSide>
        <Component.ListOptions>
          {menuOptions.map((option) => (
            <li key={option.label}>
              <a href={option.path}>{option.label}</a>
            </li>
          ))}
          {loggedIn ? (
            loggedContent
          ) : (
            <>
              <a href="#">Entrar</a>
              <Button color="secondary">Criar conta</Button>
            </>
          )}
        </Component.ListOptions>
      </Component.RightSide>
    </Component.Container>
  );
};

export { TopBarProps };
