import React from 'react';
import AddCategoryForm from './AddCategoryForm';

export default {
  title: 'Component/AddCategoryForm',
  component: AddCategoryForm,
  argTypes: { onSubmit: { action: 'submitted' } },
};

export const regular = (): JSX.Element => (
  <AddCategoryForm
    onSubmit={() => console.log('submitted')}
    missingInput={false}
    onCancel={() => console.log('canceled!')}
  />
);
