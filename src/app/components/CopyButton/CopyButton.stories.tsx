import React from 'react';
import CopyButton from './CopyButton';

export default {
  title: 'Component/CopyButton',
  component: CopyButton,
};

export const Regular = (): JSX.Element => (
  <CopyButton copyData={() => console.log('clicked!')} />
);
