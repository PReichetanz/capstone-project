import React from 'react';
import Card from './Card';

const testPupil = {
  name: 'Lena Beispiel',
  evaluation:
    'Lena ist immer gut vorbereitet und arbeitet häufig aufmerksam mit.',
};

export default {
  title: 'Component/Card',
  component: Card,
};

export const regular = (): JSX.Element => <Card pupil={testPupil} />;
