import React from 'react';
import Form from './Form';

export default {
  title: 'Component/Form',
  component: Form,
  argTypes: { onSubmit: { action: 'submitted' } },
};

export const regular = (): JSX.Element => (
  <Form
    nameLabel="Name des Schülers"
    evaluationLabel="Worturteil"
    onSubmit={() => console.log('submitted')}
    submitted={false}
  />
);

export const empty = (): JSX.Element => (
  <Form
    nameLabel="Name des Schülers"
    evaluationLabel="Worturteil"
    onSubmit={() => console.log('submitted')}
    submitted={false}
  />
);
