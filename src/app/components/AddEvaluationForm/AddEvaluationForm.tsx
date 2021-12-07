import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styled from 'styled-components';
import useEvaluations from '../../hooks/useEvaluations';
import type { Pupil } from '../../types/types';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

type AddEvaluationFormProps = {
  pupil: Pupil;
  onSubmit: (category: string, evaluation: string) => void;
  onCancel: () => void;
  missingInput: boolean;
};

export default function AddEvaluationForm({
  pupil,
  onSubmit,
  onCancel,
}: AddEvaluationFormProps): JSX.Element {
  const { evaluations } = useEvaluations();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEvaluation, setSelectedEvaluation] = useState('');
  const [rating, setRating] = useState(0);
  const [inputError, setInputError] = useState(false);
  console.log(evaluations);

  function handleRating(rate: number) {
    setRating(rate);
  }

  function handleCategory(category: string) {
    setSelectedCategory(category);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedCategory === '' || rating === 0 || selectedEvaluation === '') {
      setInputError(true);
      return;
    } else {
      const category = selectedCategory;
      const evaluation = selectedEvaluation;
      onSubmit(category, evaluation);
      setInputError(false);
      setSelectedCategory('');
      setSelectedEvaluation('');
    }
  }

  function setName(description: string) {
    return description.replace('X', pupil.name.first);
  }

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="category">Kategorie wählen:</label>
        {evaluations.map((evaluation, key) => (
          <CategoryButton
            key={`${evaluation.name}-${key}`}
            children={evaluation.name}
            onClick={() => handleCategory(evaluation.name)}
            type="button"
            category={evaluation.name}
            selectedCategory={selectedCategory}
          />
        ))}

        {inputError && selectedCategory === '' && (
          <SubmitWarning>Bitte geben Sie eine Kategorie ein.</SubmitWarning>
        )}
        <label>Bewertung wählen:</label>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          size={40}
          transition
          fillColor={`var(--color-button)`}
          emptyColor="gray"
        />

        {inputError && rating === 0 && (
          <SubmitWarning>Bitte geben Sie eine Bewertung an.</SubmitWarning>
        )}
        <label htmlFor="evaluation">Worturteil:</label>
        {selectedCategory &&
          evaluations.map((evaluation) =>
            evaluation.name === selectedCategory
              ? evaluation.evaluations.map((evaluation) =>
                  evaluation.mark === rating
                    ? evaluation.descriptions.map((description, key) => (
                        <EvaluationButton
                          key={`${description}-${key}`}
                          type="button"
                          onClick={() =>
                            setSelectedEvaluation(setName(description))
                          }
                          isActive={setName(description) === selectedEvaluation}
                        >
                          {setName(description)}
                        </EvaluationButton>
                      ))
                    : ''
                )
              : ''
          )}
        {inputError && selectedEvaluation === '' && (
          <SubmitWarning>Bitte geben Sie eine Beurteilung ein.</SubmitWarning>
        )}
        <Navigation navigateBack={() => onCancel()} isFormNavigation={true} />
      </FormContainer>
    </FormWrapper>
  );
}

interface CategoryButton {
  category: string;
  selectedCategory: string;
}

const CategoryButton = styled(Button).attrs<CategoryButton>((props) => ({
  category: props.category,
  selectedCategory: props.selectedCategory,
}))`
  background: ${(props) =>
    props.category === props.selectedCategory
      ? 'var(--color-button-hover)'
      : 'var(--color-button)'};
  &:hover {
    background: var(--color-button-hover);
  }
`;

const EvaluationButton = styled.button<{ isActive: boolean }>`
  background: inherit;
  color: inherit;
  border: none;
  font-weight: ${(props) => (props.isActive ? '800' : '400')};
  &:hover {
    font-weight: 800;
  }
`;

const FormContainer = styled.form`
  background: var(--color-background-light);
  color: var(--color-text-dark);
  border: 1px solid var(--color-stroke);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  grid-row: 2 / 3;
  left: 0.6rem;
  right: 0.6rem;
  top: 0;
`;

const FormWrapper = styled.div`
  position: relative;
`;

const SubmitWarning = styled.span`
  color: var(--color-tertiary);
  text-align: center;
`;
