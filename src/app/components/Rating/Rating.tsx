import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export default function RatingStars(): JSX.Element {
  const [rating, setRating] = useState(0);

  function handleRating(rate: number) {
    setRating(rate);
  }

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        transition
        fillColor={`var(--color-button)`}
        emptyColor="gray"
        tooltipArray={['5', '4', '3', '2', '1']}
      />
    </div>
  );
}
