import React, { useState } from 'react';
import Card from './components/Card/Card';
import Form from './components/Form/Form';

type Pupil = {
  name: string;
  evaluation: string;
};

function App(): JSX.Element {
  const [pupils, setPupils] = useState<Pupil[]>([]);
  console.log(pupils);

  function handleFormSubmit(pupil: { name: string; evaluation: string }) {
    setPupils([
      ...pupils,
      {
        name: pupil.name,
        evaluation: pupil.evaluation,
      },
    ]);
  }

  function deletePupil(name: string) {
    const newPupilsList = pupils.filter((pupil) => pupil.name !== name);
    setPupils(newPupilsList);
    console.log(newPupilsList);
  }

  return (
    <>
      <Form
        nameLabel="Name des Schülers"
        evaluationLabel="Worturteil"
        onSubmit={handleFormSubmit}
        submitted={false}
      />
      {pupils.map((pupil, key) => (
        <Card
          pupil={pupil}
          key={`${pupil.name}-${key}`}
          deleteCard={deletePupil}
        />
      ))}
    </>
  );
}

export default App;
