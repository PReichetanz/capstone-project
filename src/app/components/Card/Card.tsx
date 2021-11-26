import React from 'react';
import styled from 'styled-components';
import RoundActionButton from '../RoundActionButton/RoundActionButton';

type CardProps = {
  pupil: {
    name: string;
    evaluations: string[];
  };
  deleteCard: (name: string) => void;
};

export default function Card({ pupil, deleteCard }: CardProps): JSX.Element {
  const { name, evaluations } = pupil;
  return (
    <Container>
      <Heading>{name}</Heading>
      <RoundActionButton children="X" handleClick={() => deleteCard(name)} />
      {evaluations.map((evaluation, key) => (
        <Evaluation key={`${evaluation}-${key}`}>{evaluation}</Evaluation>
      ))}
    </Container>
  );
}

const Container = styled.article`
  position: relative;
  background: var(--color-background-dark);
  border-radius: 0.5rem;
  width: 90%;
  margin: auto;
  padding-bottom: 0.5rem;
  & + & {
    margin-top: 1rem;
  }
`;

const Heading = styled.h1`
  color: var(--color-text-white);
  padding: 0.5rem 0.75rem;
  margin: 0;
`;

const Evaluation = styled.p`
  color: var(--color-text-lightgreen);
  padding: 0.25rem 1rem;
  margin: 0;
  text-align: justify;
  hyphens: auto;
`;
