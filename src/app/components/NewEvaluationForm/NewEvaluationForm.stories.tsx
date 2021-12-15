import React from 'react';
import AddCategoryForm from './NewEvaluationForm';

export default {
  title: 'Component/AddCategoryForm',
  component: AddCategoryForm,
  argTypes: { onSubmit: { action: 'submitted' } },
};

export const regular = (): JSX.Element => (
  <AddCategoryForm
    onSubmit={() => console.log('submitted')}
    missingInputAfterSubmit={false}
    onCancel={() => console.log('canceled!')}
  />
);
