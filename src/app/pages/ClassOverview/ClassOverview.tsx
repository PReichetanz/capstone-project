import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';

type Pupil = {
  name: string;
  evaluations: string[];
};

type ClassOverviewProps = {
  isFormShown: boolean;
  setIsFormShown: (value: boolean) => void;
  handleFormSubmit: (pupil: { name: string; evaluation: string }) => void;
  pupils: Pupil[];
  deletePupil: (name: string) => void;
};

export default function ClassOverview({
  isFormShown,
  setIsFormShown,
  handleFormSubmit,
  pupils,
  deletePupil,
}: ClassOverviewProps): JSX.Element {
  const navigate = useNavigate();
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
            handleClick={() =>
              navigate(`/pupil/${pupil.name}`, { state: pupil })
            }
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
