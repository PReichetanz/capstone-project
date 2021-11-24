import React from 'react';
import styled from 'styled-components';

type CardProps = {
  pupil: {
    name: string;
    evaluation: string;
  };
};

export default function Card({ pupil }: CardProps): JSX.Element {
  const { name, evaluation } = pupil;
  return (
    <Container>
      <Heading>{name}</Heading>
      <Evaluation>{evaluation}</Evaluation>
    </Container>
  );
}

const Container = styled.article`
  background: var(--color-background-dark);
  border-radius: 0.5rem;
  width: 90%;
  margin: auto;
`;

const Heading = styled.h1`
  color: var(--color-text-white);
  padding: 0.5rem 0.75rem;
  margin: 0;
`;

const Evaluation = styled.p`
  color: var(--color-text-lightgreen);
  padding: 0.5rem 1rem;
  margin: 0;
`;
