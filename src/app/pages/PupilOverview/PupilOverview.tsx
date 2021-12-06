import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import AddEvaluationForm from '../../components/AddEvaluationForm/AddEvaluationForm';
import CopyButton from '../../components/CopyButton/CopyButton';
import EvaluationCard from '../../components/EvaluationCard/EvaluationCard';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import usePupils from '../../hooks/usePupils';
import type { Pupil } from '../../types/types';

export default function PupilOverview(): JSX.Element {
  const [isFormShown, setIsFormShown] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const { addEvaluation, deleteEvaluation, findPupilById } = usePupils();
  const currentPupil = findPupilById(id);
  const dataToCopy = getTextToCopy(currentPupil);

  function handleFormSubmit(pupil: { category: string; evaluation: string }) {
    addEvaluation(currentPupil, pupil.category, pupil.evaluation);
    setIsFormShown(false);
  }

  function getTextToCopy(pupil: Pupil | undefined) {
    let textToCopy = '';
    if (pupil) {
      const name = pupil.name;
      const evaluations = pupil.evaluations.map((evaluation) => {
        const descriptions = evaluation.descriptions.map((description) => {
          const value = `${description}`;
          return value;
        });
        const allEvaluations = descriptions.join(' ');

        return allEvaluations;
      });
      const joinedEvaluation = evaluations.join('\n');
      textToCopy = `Beurteilung von ${name}\n
      ${joinedEvaluation}`;
      return textToCopy;
    } else {
      return textToCopy;
    }
  }

  return (
    <Container>
      {currentPupil ? (
        <>
          <Header>{`${currentPupil.name.first} ${currentPupil.name.middle} ${currentPupil.name.last}`}</Header>
          <Main>
            {isFormShown && (
              <AddEvaluationForm
                pupil={currentPupil}
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
            {currentPupil.evaluations.length === 0 ? (
              ''
            ) : (
              <CopyButton copyText={dataToCopy} />
            )}
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
