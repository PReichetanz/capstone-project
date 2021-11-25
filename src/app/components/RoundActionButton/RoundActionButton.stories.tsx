import React from 'react';
import RoundActionButton from './RoundActionButton';

export default {
  title: 'Component/RoundActionButton',
  component: RoundActionButton,
};

export const DeleteX = (): JSX.Element => (
  <RoundActionButton
    children="X"
    handleClick={() => onDelete()}
  ></RoundActionButton>
);

export const DeleteMinus = (): JSX.Element => (
  <RoundActionButton
    children="–"
    handleClick={() => onDelete()}
  ></RoundActionButton>
);

function onDelete(): void {
  console.log('Deleted!');
}
