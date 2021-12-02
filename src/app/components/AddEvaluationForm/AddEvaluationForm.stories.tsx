import React from 'react';
import AddEvaluationForm from './AddEvaluationForm';

export default {
  title: 'Component/AddEvaluationForm',
  component: AddEvaluationForm,
  argTypes: { onSubmit: { action: 'submitted' } },
};

export const regular = (): JSX.Element => (
  <AddEvaluationForm
    onSubmit={() => console.log('submitted')}
    missingInput={false}
    onCancel={() => console.log('canceled!')}
  />
);
