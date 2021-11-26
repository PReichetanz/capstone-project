import React, { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import styled from 'styled-components';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import Button from './components/Button/Button';

type Pupil = {
  name: string;
  evaluations: string[];
};

export default function App(): JSX.Element {
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
      <Header>
        <h1>Meine Klasse</h1>
      </Header>
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

const Header = styled.div`
  grid-row: 1/ 2;
  color: var(--color-text-white);
  background: var(--color-background-dark);
  padding-left: 1rem;
  border-bottom: 1px solid var(--color-stroke);
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
