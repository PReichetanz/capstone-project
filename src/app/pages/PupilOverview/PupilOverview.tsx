import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import EvaluationCard from '../../components/EvaluationCard/EvaluationCard';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

type PupilOverviewProps = {
  pupil: {
    name: string;
    evaluations: string[];
  };
  deleteEvaluation: (name: string, evaluation: string) => void;
};

export default function PupilOverview({
  pupil,
  deleteEvaluation,
}: PupilOverviewProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>{pupil.name}</Header>
      <Main>
        {pupil.evaluations.map((evaluation: string, key: number) => (
          <EvaluationCard
            key={`${evaluation}-${key}`}
            header="Kategorie"
            name={pupil.name}
            evaluation={evaluation}
            deleteCard={deleteEvaluation}
          />
        ))}
      </Main>
      <Navigation
        isFormNavigation={false}
        navigateButton={true}
        navigateBack={() => navigate('/')}
      ></Navigation>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: var(--color-background-light);
  padding-bottom: 0.5rem;
`;

const Main = styled.main`
  grid-row: 2 / 3;
  height: auto;
  overflow-y: auto;
  padding: 0.5rem 0;
`;
