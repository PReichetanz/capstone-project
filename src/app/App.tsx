import React, { useState } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import ClassOverview from './pages/ClassOverview/ClassOverview';
import PupilOverview from './pages/PupilOverview/PupilOverview';

type Pupil = {
  name: string;
  evaluations: string[];
};

export default function App(): JSX.Element {
  const [pupils, setPupils] = useLocalStorage<Pupil[]>('myPupils', []);
  const [isFormShown, setIsFormShown] = useState(false);
  const navigate = useNavigate();

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

  function deleteEvaluation(name: string, evaluationToDelete: string) {
    const existingPupil = findPupilByName(name);
    if (existingPupil) {
      const existingPupilId = pupils.findIndex(
        (pupil) => pupil.name === existingPupil.name
      );

      const newEvaluationsList = existingPupil.evaluations.filter(
        (evaluation: string) => evaluation !== evaluationToDelete
      );
      if (newEvaluationsList.length === 0) {
        deletePupil(name);
        navigate('/');
        return;
      } else {
        existingPupil.evaluations = newEvaluationsList;
        const newPupils = pupils.slice();
        newPupils[existingPupilId] = existingPupil;
        setPupils(newPupils);
      }
    }
  }

  function PupilHandler({ pupils }: { pupils: Pupil[] }): JSX.Element {
    const params = useParams();
    const pupil = pupils.find((pupil) => pupil.name === params.pupilName);
    return pupil ? (
      <PupilOverview pupil={pupil} deleteEvaluation={deleteEvaluation} />
    ) : (
      <h1>404 Page not found</h1>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ClassOverview
            isFormShown={isFormShown}
            setIsFormShown={setIsFormShown}
            handleFormSubmit={handleFormSubmit}
            pupils={pupils}
            deletePupil={deletePupil}
          />
        }
      />
      <Route path="/pupil" element={<PupilHandler pupils={pupils} />}>
        <Route path=":pupilName" />
      </Route>
    </Routes>
  );
}
