import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import CopyButton from '../../components/CopyButton/CopyButton';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import usePupils from '../../hooks/usePupils';
import type { Evaluation, Pupil } from '../../types/types';

export default function ClassOverview(): JSX.Element {
  const { pupils, addPupil, deletePupil } = usePupils();
  const [isFormShown, setIsFormShown] = useState(false);
  const dataToCopy = getTextToCopy(pupils);

  function handleFormSubmit(pupil: {
    name: string;
    category: string;
    evaluation: string;
  }) {
    addPupil(pupil);
    setIsFormShown(false);
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
          <Form
            onSubmit={handleFormSubmit}
            missingInput={false}
            onCancel={() => setIsFormShown(false)}
          />
        )}
        {pupils.map((pupil, key) => (
          <Card key={key} pupil={pupil} deleteCard={deletePupil} />
        ))}
        {pupils.length === 0 ? '' : <CopyButton copyText={dataToCopy} />}
      </Main>
      <AddButton onClick={() => setIsFormShown(true)}>
        Schüler hinzufügen
      </AddButton>
    </Container>
  );
}

const AddButton = styled(Button)`
  grid-row: 3 / 4;
  margin-top: 0.5rem;
`;

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
