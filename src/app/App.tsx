import React, { useState } from 'react';
import Card from './components/Card/Card';
import Form from './components/Form/Form';

type Pupil = {
  name: string;
  evaluations: string[];
};

function App(): JSX.Element {
  const [pupils, setPupils] = useState<Pupil[]>([]);
  console.log(pupils);

  function findPupil(pupil: { name: string; evaluation: string }) {
    const newPupil = pupil;
    const existingPupil = pupils.find((pupil) => pupil.name === newPupil.name);
    if (existingPupil === undefined) {
      return false;
    } else {
      return existingPupil;
    }
  }

  function handleFormSubmit(pupil: { name: string; evaluation: string }) {
    const existingPupil = findPupil(pupil);
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
    } else {
      setPupils([
        ...pupils,
        {
          name: pupil.name,
          evaluations: [pupil.evaluation],
        },
      ]);
    }
  }

  function deletePupil(name: string) {
    const newPupilsList = pupils.filter((pupil) => pupil.name !== name);
    setPupils(newPupilsList);
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
