import React from 'react';
import RatingButton from './RatingButton';

export default {
  title: 'Component/RatingButton',
  component: RatingButton,
};

function handleClick() {
  console.log('The button was clicked.');
}

export const Selected = (): JSX.Element => (
  <RatingButton handleClick={handleClick} selectedRating={1} buttonRating={1}>
    1
  </RatingButton>
);

export const NotSelected = (): JSX.Element => (
  <RatingButton handleClick={handleClick} selectedRating={2} buttonRating={1}>
    1
  </RatingButton>
);
