import React, { useState } from 'react';
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
    </>
  );
}

export default App;
