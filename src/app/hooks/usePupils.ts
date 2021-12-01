import { nanoid } from 'nanoid';
import type { Pupil } from '../types/types';
import useLocalStorage from './useLocalStorage';

export default function usePupils(): {
  pupils: Pupil[];
  findPupilById: (id: string | undefined) => Pupil | undefined;
  addPupil: (pupil: { name: string; evaluation: string }) => void;
  deletePupil: (id: string) => void;
  deleteEvaluation: (pupilId: string, evalationToDeleteId: string) => void;
} {
  const [pupils, setPupils] = useLocalStorage<Pupil[]>('myPupils', []);

  function findPupilById(id: string | undefined) {
    return pupils.find((pupil) => pupil.id === id);
  }

  function findPupilByName(name: string) {
    return pupils.find((pupil) => pupil.name === name);
  }

  function addPupil(pupil: { name: string; evaluation: string }) {
    const existingPupil = findPupilByName(pupil.name);
    if (existingPupil) {
      const existingPupilId = pupils.findIndex(
        (pupil) => pupil.name === existingPupil.name
      );
      existingPupil.evaluations = [
        ...existingPupil.evaluations,
        {
          id: nanoid(),
          description: pupil.evaluation,
        },
      ];
      const newPupils = pupils.slice();
      newPupils[existingPupilId] = existingPupil;
      setPupils(newPupils);
      //setIsFormShown(false);
    } else {
      setPupils([
        ...pupils,
        {
          id: nanoid(),
          name: pupil.name,
          evaluations: [
            {
              id: nanoid(),
              description: pupil.evaluation,
            },
          ],
        },
      ]);
      //setIsFormShown(false);
    }
  }

  function deletePupil(id: string) {
    const newPupilsList = pupils.filter((pupil) => pupil.id !== id);
    setPupils(newPupilsList);
  }

  function deleteEvaluation(pupilId: string, evaluationToDeleteId: string) {
    const currentPupil = findPupilById(pupilId);
    if (currentPupil) {
      const existingPupilId = pupils.findIndex(
        (pupil) => pupil.id === currentPupil.id
      );

      const newEvaluationsList = currentPupil.evaluations.filter(
        (evaluation) => evaluation.id !== evaluationToDeleteId
      );

      currentPupil.evaluations = newEvaluationsList;
      const newPupils = pupils.slice();
      newPupils[existingPupilId] = currentPupil;
      setPupils(newPupils);
    }
  }

  return { pupils, findPupilById, addPupil, deletePupil, deleteEvaluation };
}
