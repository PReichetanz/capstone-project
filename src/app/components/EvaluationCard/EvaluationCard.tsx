import React from 'react';
import styled from 'styled-components';
import RoundActionButton from '../RoundActionButton/RoundActionButton';

type CardProps = {
  pupilId: string;
  evaluation: {
    id: string;
    category: string;
    descriptions: string[];
  };
  onDeleteClick: (pupilId: string, evaluationId: string) => void;
};

export default function EvaluationCard({
  pupilId,
  evaluation,
  onDeleteClick,
}: CardProps): JSX.Element {
  return (
    <Container>
      <Heading>{evaluation.category}</Heading>
      <RoundActionButton
        children="X"
        handleClick={() => onDeleteClick(pupilId, evaluation.id)}
      />
      {evaluation.descriptions
        ? evaluation.descriptions.map((description, key) => (
            <Evaluation key={key}>{description}</Evaluation>
          ))
        : ''}
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
