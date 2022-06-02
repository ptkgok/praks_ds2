import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dialog } from '../src/atomic/organisms/dialog';

const meta: Meta = {
  title: 'Dialog',
  component: Dialog,
};
export default meta;

export const Default = () => (
  <Dialog>
    <style>{` * { font-family: 'Roboto', sans-serif;}`}</style>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <img
      src="https://res.cloudinary.com/code-comunity/image/upload/v1652371612/praks/undraw_creative_team_re_85gn_sdif0g.svg"
      alt="vector"
      width="200px"
    />
    <h1>Dialog</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod,
      nunc eget euismod consectetur, nunc nisl aliquam nisl, euismod egestas
      nisl nisl euismod.
    </p>
  </Dialog>
);
