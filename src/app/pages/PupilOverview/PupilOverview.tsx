import React from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import type { Pupil } from '../../types/types';
import EvaluationCard from '../../components/EvaluationCard/EvaluationCard';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function PupilOverview(): JSX.Element {
  const [pupils, setPupils] = useLocalStorage<Pupil[]>('myPupils', []);
  const navigate = useNavigate();
  const { pupilName } = useParams<string>();
  const currentPupil = findPupilByName(pupilName);
  console.log(currentPupil);

  function findPupilByName(name: string | undefined) {
    return pupils.find((pupil) => pupil.name === name);
  }

  function deleteEvaluation(evaluationToDeleteId: string) {
    if (currentPupil) {
      const existingPupilId = pupils.findIndex(
        (pupil) => pupil.id === currentPupil.id
      );

      const newEvaluationsList = currentPupil.evaluations.filter(
        (evaluation) => evaluation.id !== evaluationToDeleteId
      );

      currentPupil.evaluations = newEvaluationsList;
      const newPupils = pupils.slice();
      newPupils[existingPupilId] = currentPupil;
      setPupils(newPupils);
    }
  }

  return (
    <Container>
      {currentPupil ? (
        <>
          <Header>{currentPupil.name}</Header>
          <Main>
            {currentPupil.evaluations.map((evaluation) => (
              <EvaluationCard
                key={evaluation.id}
                header="Kategorie"
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
