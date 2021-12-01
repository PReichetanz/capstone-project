import React from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import EvaluationCard from '../../components/EvaluationCard/EvaluationCard';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import useLocalStorage from '../../hooks/useLocalStorage';

type Pupil = {
  name: string;
  evaluations: string[];
};

export default function PupilOverview(): JSX.Element {
  const [pupils, setPupils] = useLocalStorage<Pupil[]>('myPupils', []);
  const navigate = useNavigate();
  const { pupilName } = useParams<string>();
  const pupil = findPupilByName(pupilName);

  function findPupilByName(name: string | undefined) {
    return pupils.find((pupil) => pupil.name === name);
  }

  function deleteEvaluation(evaluationToDelete: string) {
    if (pupil) {
      const existingPupilId = pupils.findIndex(
        (pupil) => pupil.name === pupil.name
      );

      const newEvaluationsList = pupil.evaluations.filter(
        (evaluation: string) => evaluation !== evaluationToDelete
      );

      pupil.evaluations = newEvaluationsList;
      const newPupils = pupils.slice();
      newPupils[existingPupilId] = pupil;
      setPupils(newPupils);
    }
  }

  return (
    <Container>
      {pupil ? (
        <>
          <Header>{pupil.name}</Header>
          <Main>
            {pupil.evaluations.map((evaluation: string, key: number) => (
              <EvaluationCard
                key={`${evaluation}-${key}`}
                header="Kategorie"
                name={pupil.name}
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
