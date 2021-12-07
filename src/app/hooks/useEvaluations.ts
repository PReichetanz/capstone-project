import defaultEvaluations from '../components/utils/DefaultEvaluations';
import type { DefaultEvaluation } from '../types/types';
import useLocalStorage from './useLocalStorage';

export default function useEvaluations(): {
  evaluations: DefaultEvaluation[];
} {
  const [evaluations] = useLocalStorage<DefaultEvaluation[]>(
    'defaultEvaluations',
    defaultEvaluations
  );
  return { evaluations };
}
