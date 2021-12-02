import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import AddEvaluationForm from '../../components/AddEvaluationForm/AddEvaluationForm';
import EvaluationCard from '../../components/EvaluationCard/EvaluationCard';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import usePupils from '../../hooks/usePupils';

export default function PupilOverview(): JSX.Element {
  const [isFormShown, setIsFormShown] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const { addEvaluation, deleteEvaluation, findPupilById } = usePupils();
  const currentPupil = findPupilById(id);

  function handleFormSubmit(pupil: { category: string; evaluation: string }) {
    addEvaluation(currentPupil, pupil.category, pupil.evaluation);
    setIsFormShown(false);
  }

  return (
    <Container>
      {currentPupil ? (
        <>
          <Header>{currentPupil.name}</Header>
          <Main>
            {isFormShown && (
              <AddEvaluationForm
                onSubmit={handleFormSubmit}
                missingInput={false}
                onCancel={() => setIsFormShown(false)}
              />
            )}
            {currentPupil.evaluations.length === 0
              ? ''
              : currentPupil.evaluations.map((evaluation) => (
                  <EvaluationCard
                    key={evaluation.id}
                    pupilId={currentPupil.id}
                    evaluation={evaluation}
                    onDeleteClick={deleteEvaluation}
                  />
                ))}
          </Main>
          <Navigation
            isFormNavigation={false}
            showForm={() => setIsFormShown(true)}
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
