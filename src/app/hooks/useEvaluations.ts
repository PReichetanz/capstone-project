import defaultEvaluations from '../components/utils/DefaultEvaluations';
import type { DefaultEvaluation } from '../types/types';
import useLocalStorage from './useLocalStorage';

export default function useEvaluations(): {
  evaluations: DefaultEvaluation[];
  addNewEvaluation: (
    category: string,
    rating: number,
    evaluation: string
  ) => void;
} {
  const [evaluations, setEvaluations] = useLocalStorage<DefaultEvaluation[]>(
    'defaultEvaluations',
    defaultEvaluations
  );

  const categoryTemplate: DefaultEvaluation = {
    name: '',
    valuations: [
      {
        mark: 20,
        descriptions: [],
      },
      {
        mark: 40,
        descriptions: [],
      },
      {
        mark: 60,
        descriptions: [],
      },
      {
        mark: 80,
        descriptions: [],
      },
      {
        mark: 100,
        descriptions: [],
      },
    ],
  };

  function addNewEvaluation(
    category: string,
    rating: number,
    evaluation: string
  ) {
    const existingCategory = evaluations.find(
      (evaluation) => evaluation.name === category
    );
    const existingCategoryIndex = evaluations.findIndex(
      (evaluation) => evaluation.name === category
    );

    if (existingCategory) {
      const RatingIndex = existingCategory.valuations.findIndex(
        (valuation) => valuation.mark === rating
      );
      const newDescriptions = [
        ...existingCategory.valuations[RatingIndex].descriptions,
        evaluation,
      ];
      existingCategory.valuations[RatingIndex].descriptions = newDescriptions;

      const newEvaluations = evaluations.slice();
      newEvaluations[existingCategoryIndex] = existingCategory;
      setEvaluations(newEvaluations);
    } else {
      const newCategory = categoryTemplate;
      newCategory.name = category;
      const RatingIndex = newCategory.valuations.findIndex(
        (valuation) => valuation.mark === rating
      );
      const newDescriptions = [
        ...newCategory.valuations[RatingIndex].descriptions,
        evaluation,
      ];
      newCategory.valuations[RatingIndex].descriptions = newDescriptions;
      setEvaluations([...evaluations, newCategory]);
    }
  }

  return { evaluations, addNewEvaluation };
}
