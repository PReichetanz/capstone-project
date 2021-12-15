import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import CopyButton from '../../components/CopyButton/CopyButton';
import AddPupilForm from '../../components/AddPupilForm/AddPupilForm';
import Header from '../../components/Header/Header';
import usePupils from '../../hooks/usePupils';
import type { Evaluation, Pupil } from '../../types/types';
import Navigation from '../../components/Navigation/Navigation';
import NewEvaluationForm from '../../components/NewEvaluationForm/NewEvaluationForm';
import useEvaluations from '../../hooks/useEvaluations';

export default function ClassOverview(): JSX.Element {
  const { pupils, addPupil, deletePupil } = usePupils();
  const { addNewEvaluation } = useEvaluations();
  const [isFormShown, setIsFormShown] = useState(false);
  const [isSettingShown, setIsSettingShown] = useState(false);
  const dataToCopy = getTextToCopy(pupils);

  function handleFormSubmit(name: string) {
    addPupil(name);
    setIsFormShown(false);
  }

  function handleNewCategory(
    category: string,
    rating: number,
    evaluation: string
  ) {
    addNewEvaluation(category, rating, evaluation);
    setIsSettingShown(false);
  }

  function getTextToCopy(pupils: Pupil[] | undefined) {
    let textToCopy = '';
    if (pupils) {
      const allPupils = pupils.map((pupil) => {
        const name = pupil.name;
        const evaluations = pupil.evaluations.map((evaluation: Evaluation) => {
          const descriptions = evaluation.descriptions.map((description) => {
            const value = `${description}`;
            return value;
          });
          const allEvaluations = descriptions.join(' ');

          return allEvaluations;
        });
        const joinedEvaluation = evaluations.join('\n');
        const evaluatedPupil = `${name}\n
        ${joinedEvaluation}`;
        return evaluatedPupil;
      });
      const joinedAllPupils = allPupils.join('\n\n');
      textToCopy = `Meine Klasse\n
      ${joinedAllPupils}`;
      return textToCopy;
    } else {
      return textToCopy;
    }
  }

  return (
    <Container>
      <Header>Meine Klasse</Header>
      <Main>
        {isFormShown && (
          <AddPupilForm
            onSubmit={handleFormSubmit}
            missingInput={false}
            onCancel={() => setIsFormShown(false)}
          />
        )}
        {isSettingShown && (
          <NewEvaluationForm
            onSubmit={handleNewCategory}
            onCancel={() => setIsSettingShown(false)}
            missingInputAfterSubmit={false}
          />
        )}
        {pupils.map((pupil) => (
          <Card key={pupil.id} pupil={pupil} deleteCard={deletePupil} />
        ))}
        {pupils.length === 0 ? '' : <CopyButton copyText={dataToCopy} />}
      </Main>
      <Navigation
        isFormNavigation={false}
        showForm={() => setIsFormShown(true)}
        showSettings={() => setIsSettingShown(true)}
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
