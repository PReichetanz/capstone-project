import React from 'react';
import Rating from './Rating';

export default {
  title: 'Component/Rating',
  component: Rating,
};

export const Regular = (): JSX.Element => (
  <Rating
    selectedRating={3}
    onRatingClick={() => console.log('clicked')}
  ></Rating>
);
