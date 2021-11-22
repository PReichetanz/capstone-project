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
    name="Max Musterjunge"
    evaluation="Max ist immer nett."
  />
);
