import React from 'react';
import Form from './AddPupilForm';

export default {
  title: 'Component/Form',
  component: Form,
  argTypes: { onSubmit: { action: 'submitted' } },
};

export const regular = (): JSX.Element => (
  <Form
    onSubmit={() => console.log('submitted')}
    missingInput={false}
    onCancel={() => console.log('canceled!')}
  />
);

export const empty = (): JSX.Element => (
  <Form
    onSubmit={() => console.log('submitted')}
    missingInput={false}
    onCancel={() => console.log('canceled!')}
  />
);
