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

  return (
    <>
      <Form
        nameLabel="Name des Schülers"
        evaluationLabel="Worturteil"
        onSubmit={handleFormSubmit}
        submitted={false}
      />
      {pupils.map((pupil, key) => (
        <Card pupil={pupil} key={`${pupil.name}-${key}`} />
      ))}
    </>
  );
}

export default App;
