import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Pupil } from '../../types/types';
import RoundActionButton from '../RoundActionButton/RoundActionButton';

type CardProps = {
  pupil: Pupil;
  deleteCard: (id: string) => void;
};

export default function Card({ pupil, deleteCard }: CardProps): JSX.Element {
  const { name, evaluations } = pupil;
  return (
    <Container>
      <RoundActionButton
        children="X"
        handleClick={() => deleteCard(pupil.id)}
      />
      <CardLink to={`/pupil/${pupil.id}`}>
        <Heading>{`${name.first} ${name.middle} ${name.last}`}</Heading>
        {evaluations.map((evaluation, key) => (
          <span key={key}>
            {evaluation.descriptions
              ? evaluation.descriptions.map((description, key) => (
                  <Evaluation key={key}>{description}</Evaluation>
                ))
              : ''}
          </span>
        ))}
      </CardLink>
    </Container>
  );
}

const CardLink = styled(Link)`
  text-decoration: none;
`;

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
