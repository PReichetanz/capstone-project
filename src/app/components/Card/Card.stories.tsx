import React from 'react';
import Card from './Card';

const testPupil = {
  id: 'hdnehdnae',
  name: 'Lena Beispiel',
  evaluations: [
    {
      id: '29dndje',
      description:
        'Lena ist immer gut vorbereitet und arbeitet häufig aufmerksam mit.',
    },
  ],
};

const moreEvaluations = {
  id: 'kdnejdke123',
  name: 'Lena Beispiel',
  evaluations: [
    {
      id: 'kdje828',
      description:
        'Lena ist immer gut vorbereitet und arbeitet häufig aufmerksam mit.',
    },
    {
      id: 'o29djen',
      description:
        'Sie verhält sich den Lehrern gegenüber freundlich und zuvorkommend.',
    },
    {
      id: 'dken923',
      description:
        'An ihrer Heftführung sollte Lena noch ein wenig feilen, um die Arbeitsmaterialien jederzeit parat zu haben.',
    },
  ],
};

export default {
  title: 'Component/Card',
  component: Card,
};

export const regular = (): JSX.Element => (
  <Card pupil={testPupil} deleteCard={() => console.log('deleted')} />
);

export const Long = (): JSX.Element => (
  <Card pupil={moreEvaluations} deleteCard={() => console.log('deleted')} />
);
