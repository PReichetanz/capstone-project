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
    onSubmitForm={() => console.log('submitted')}
    name="Max Musterjunge"
    evaluation="Max ist immer nett."
  />
);

export const empty = (): JSX.Element => (
  <Form
    nameLabel="Name des Schülers"
    evaluationLabel="Worturteil"
    onSubmitForm={() => console.log('submitted')}
    name=""
    evaluation=""
  />
);
