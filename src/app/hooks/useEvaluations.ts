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

    const newCategory = categoryTemplate;
    newCategory.name = category;
    const RatingID = newCategory.valuations.findIndex(
      (valuation) => valuation.mark === rating
    );
    const newDescriptions = [
      ...newCategory.valuations[RatingID].descriptions,
      evaluation,
    ];
    newCategory.valuations[RatingID].descriptions = newDescriptions;
    setEvaluations([...evaluations, newCategory]);
  }

  return { evaluations, addNewEvaluation };
}
