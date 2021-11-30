import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import useLocalStorage from '../../hooks/useLocalStorage';

type Pupil = {
  name: string;
  evaluations: string[];
};

export default function ClassOverview(): JSX.Element {
  const [pupils, setPupils] = useLocalStorage<Pupil[]>('myPupils', []);
  const [isFormShown, setIsFormShown] = useState(false);

  function findPupilByName(name: string) {
    return pupils.find((pupil) => pupil.name === name);
  }

  function handleFormSubmit(pupil: { name: string; evaluation: string }) {
    const existingPupil = findPupilByName(pupil.name);
    if (existingPupil) {
      const existingPupilId = pupils.findIndex(
        (pupil) => pupil.name === existingPupil.name
      );
      existingPupil.evaluations = [
        ...existingPupil.evaluations,
        pupil.evaluation,
      ];
      const newPupils = pupils.slice();
      newPupils[existingPupilId] = existingPupil;
      setPupils(newPupils);
      setIsFormShown(false);
    } else {
      setPupils([
        ...pupils,
        {
          name: pupil.name,
          evaluations: [pupil.evaluation],
        },
      ]);
      setIsFormShown(false);
    }
  }

  function deletePupil(name: string) {
    const newPupilsList = pupils.filter((pupil) => pupil.name !== name);
    setPupils(newPupilsList);
  }
  return (
    <Container>
      <Header>Meine Klasse</Header>
      <Main>
        {isFormShown && (
          <Form
            nameLabel="Name des Schülers"
            evaluationLabel="Worturteil"
            onSubmit={handleFormSubmit}
            missingInput={false}
            onCancel={() => setIsFormShown(false)}
          />
        )}
        {pupils.map((pupil, key) => (
          <Card
            pupil={pupil}
            key={`${pupil.name}-${key}`}
            deleteCard={deletePupil}
          />
        ))}
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
