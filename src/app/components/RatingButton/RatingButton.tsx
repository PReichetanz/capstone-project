import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type RatingButtonProps = {
  children: ReactNode;
  handleClick: (rating: number) => void;
  selectedRating: number;
  buttonRating: number;
};

export default function RatingButton({
  children,
  handleClick,
  selectedRating,
  buttonRating,
}: RatingButtonProps): JSX.Element {
  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    handleClick(buttonRating);
  }
  return (
    <StyledRatingButton
      onClick={(event) => handleButtonClick(event)}
      selectedRating={selectedRating}
      buttonRating={buttonRating}
    >
      {children}
    </StyledRatingButton>
  );
}

interface StylingProps {
  selectedRating: number;
  buttonRating: number;
}

const StyledRatingButton = styled.button.attrs<StylingProps>((props) => ({
  selectedRating: props.selectedRating,
  buttonRating: props.buttonRating,
}))`
  background: ${(props: StylingProps) =>
    props.selectedRating === props.buttonRating
      ? 'var(--color-button-hover)'
      : 'var(--color-button)'};
  border-radius: 50%;
  border: 1px solid var(--color-stroke);
  font-weight: 700;
  padding: 0.5rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  &:hover {
    background: var(--color-button-hover);
  }
`;
