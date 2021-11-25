import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Neu = (): JSX.Element => (
  <Button handleClick={() => console.log('clicked!')}>
    Schüler hinzufügen
  </Button>
);
