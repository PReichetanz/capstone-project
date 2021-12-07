import { nanoid } from 'nanoid';
import handleInput from '../components/utils/normalizeInput';
import type { Pupil, PupilName } from '../types/types';
import useLocalStorage from './useLocalStorage';

export default function usePupils(): {
  pupils: Pupil[];
  findPupilById: (id: string | undefined) => Pupil | undefined;
  addPupil: (name: string) => void;
  addEvaluation: (
    pupil: Pupil | undefined,
    newCategory: string,
    newEvaluation: string
  ) => void;
  deletePupil: (id: string) => void;
  deleteEvaluation: (pupilId: string, evalationToDeleteId: string) => void;
} {
  const [pupils, setPupils] = useLocalStorage<Pupil[]>('myPupils', []);

  function findPupilById(id: string | undefined) {
    return pupils.find((pupil) => pupil.id === id);
  }

  function findPupilByName(name: PupilName) {
    return pupils.find(
      (pupil) =>
        pupil.name.first === name.first &&
        pupil.name.middle === name.middle &&
        pupil.name.last === name.last
    );
  }

  function addEvaluation(
    pupil: Pupil | undefined,
    category: string,
    evaluation: string
  ) {
    const existingPupil = pupil;
    if (existingPupil) {
      const existingPupilIndex = pupils.findIndex(
        (pupil) => pupil.id === existingPupil.id
      );

      const existingCategory = existingPupil.evaluations.find(
        (evaluation) => evaluation.category === category
      );
      if (existingCategory) {
        const existingCategoryId = existingPupil.evaluations.findIndex(
          (evaluation) => evaluation.id === existingCategory.id
        );
        const newEvaluations = existingPupil.evaluations.slice();
        newEvaluations[existingCategoryId].descriptions = [
          ...newEvaluations[existingCategoryId].descriptions,
          evaluation,
        ];
        existingPupil.evaluations = newEvaluations;
      } else {
        existingPupil.evaluations = [
          ...existingPupil.evaluations,
          {
            id: nanoid(),
            category: category,
            descriptions: [evaluation],
          },
        ];
      }
      existingPupil.evaluations.sort((a, b) => {
        const firstCategory = a.category.toLowerCase();
        const secondCategory = b.category.toLowerCase();
        if (firstCategory < secondCategory) {
          return -1;
        }
        if (firstCategory > secondCategory) {
          return 1;
        }
        return 0;
      });
      const newPupils = pupils.slice();
      newPupils[existingPupilIndex] = existingPupil;
      setPupils(newPupils);
    }
  }

  function addPupil(name: string) {
    const normalizedPupil = handleInput(name);
    const existingPupil = findPupilByName(normalizedPupil.name);
    if (existingPupil) {
      return;
    } else {
      setPupils([
        ...pupils,
        {
          id: nanoid(),
          name: normalizedPupil.name,
          evaluations: [],
        },
      ]);
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

  return {
    pupils,
    findPupilById,
    addEvaluation,
    addPupil,
    deletePupil,
    deleteEvaluation,
  };
}
