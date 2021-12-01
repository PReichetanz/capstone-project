import React from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import EvaluationCard from '../../components/EvaluationCard/EvaluationCard';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import usePupils from '../../hooks/usePupils';

export default function PupilOverview(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const { deleteEvaluation, findPupilById } = usePupils();
  const currentPupil = findPupilById(id);

  return (
    <Container>
      {currentPupil ? (
        <>
          <Header>{currentPupil.name}</Header>
          <Main>
            {currentPupil.evaluations.map((evaluation) => (
              <EvaluationCard
                key={evaluation.id}
                pupilId={currentPupil.id}
                header={evaluation.category}
                evaluation={evaluation}
                onDeleteClick={deleteEvaluation}
              />
            ))}
          </Main>
          <Navigation
            isFormNavigation={false}
            navigateButton={true}
            navigateBack={() => navigate('/')}
          ></Navigation>{' '}
        </>
      ) : (
        ''
      )}
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
