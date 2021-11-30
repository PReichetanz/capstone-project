import React from 'react';
import Card from './Card';

const testPupil = {
  name: 'Lena Beispiel',
  evaluations: [
    'Lena ist immer gut vorbereitet und arbeitet häufig aufmerksam mit.',
  ],
};

const moreEvaluations = {
  name: 'Lena Beispiel',
  evaluations: [
    'Lena ist immer gut vorbereitet und arbeitet häufig aufmerksam mit.',
    'Sie verhält sich den Lehrern gegenüber freundlich und zuvorkommend.',
    'An ihrer Heftführung sollte Lena noch ein wenig feilen, um die Arbeitsmaterialien jederzeit parat zu haben.',
  ],
};

export default {
  title: 'Component/Card',
  component: Card,
};

export const regular = (): JSX.Element => (
  <Card
    pupil={testPupil}
    deleteCard={() => console.log('deleted')}
    handleClick={() => console.log('clicked')}
  />
);

export const Long = (): JSX.Element => (
  <Card
    pupil={moreEvaluations}
    deleteCard={() => console.log('deleted')}
    handleClick={() => console.log('clicked')}
  />
);
