import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Regular = (): JSX.Element => (
  <Button onClick={() => console.log('clicked!')}>Schüler hinzufügen</Button>
);
