import React from 'react';
import AddEvaluationForm from './AddEvaluationForm';

const pupil = {
  id: 'dhej28dhj',
  name: {
    first: 'Lena',
    middle: null,
    last: 'Beispiel',
  },
  evaluations: [
    {
      id: '28djeund',
      category: 'Arbeitsweise',
      descriptions: ['Lena arbeitet gut mit'],
    },
  ],
};

export default {
  title: 'Component/AddEvaluationForm',
  component: AddEvaluationForm,
  argTypes: { onSubmit: { action: 'submitted' } },
};

export const regular = (): JSX.Element => (
  <AddEvaluationForm
    pupil={pupil}
    onSubmit={() => console.log('submitted')}
    missingInputAfterSubmit={false}
    onCancel={() => console.log('canceled!')}
  />
);
