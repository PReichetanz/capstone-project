import React from 'react';
import MainButton from './MainButton';

export default {
  title: 'Component/Button',
  component: MainButton,
};

export const Regular = (): JSX.Element => (
  <MainButton handleClick={() => console.log('clicked!')}>
    Schüler hinzufügen
  </MainButton>
);
