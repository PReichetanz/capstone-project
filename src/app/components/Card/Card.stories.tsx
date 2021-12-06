import React from 'react';
import Card from './Card';

const testPupil = {
  id: 'hdnehdnae',
  name: {
    first: 'Lena',
    middle: 'Maria',
    last: 'Beispiel',
  },
  evaluations: [
    {
      id: '29dndje',
      category: 'Arbeitsweise',
      descriptions: [
        'Lena ist immer gut vorbereitet und arbeitet häufig aufmerksam mit.',
      ],
    },
  ],
};

const moreEvaluations = {
  id: 'kdnejdke123',
  name: {
    first: 'Lena',
    middle: 'Maria',
    last: 'Beispiel',
  },
  evaluations: [
    {
      id: 'kdje828',
      category: 'Arbeitsweise',
      descriptions: [
        'Lena ist immer gut vorbereitet und arbeitet häufig aufmerksam mit.',
      ],
    },
    {
      id: 'o29djen',
      category: 'Verhalten gegenüber dem Lehrer',
      descriptions: [
        'Sie verhält sich den Lehrern gegenüber freundlich und zuvorkommend.',
      ],
    },
    {
      id: 'dken923',
      category: 'Heftführung',
      descriptions: [
        'An ihrer Heftführung sollte Lena noch ein wenig feilen, um die Arbeitsmaterialien jederzeit parat zu haben.',
      ],
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
