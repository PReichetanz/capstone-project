import React from 'react';
import DeleteButton from './DeleteButton';

export default {
  title: 'Component/DeleteButton',
  component: DeleteButton,
};

export const DeleteX = (): JSX.Element => (
  <DeleteButton content="X" handleDelete={() => onDelete()}></DeleteButton>
);

export const DeleteMinus = (): JSX.Element => (
  <DeleteButton content="–" handleDelete={() => onDelete()}></DeleteButton>
);

function onDelete(): void {
  console.log('Deleted!');
}
