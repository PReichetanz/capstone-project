import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styled from 'styled-components';
import type { Pupil } from '../../types/types';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import defaultEvaluations from '../utils/DefaultEvaluations';

type AddEvaluationFormProps = {
  pupil: Pupil;
  onSubmit: (pupil: { category: string; evaluation: string }) => void;
  onCancel: () => void;
  missingInput: boolean;
};

export default function AddEvaluationForm({
  pupil,
  onSubmit,
  onCancel,
}: AddEvaluationFormProps): JSX.Element {
  const standardEvaluations = defaultEvaluations;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [evaluation, setEvaluation] = useState('');
  const [inputError, setInputError] = useState(false);
  console.log(selectedCategory);
  console.log(standardEvaluations);
  console.log(evaluation);

  const selectedEvaluation = evaluation;

  function handleRating(rate: number) {
    setRating(rate);
  }

  function handleCategory(category: string) {
    setSelectedCategory(category);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedCategory === '' || rating === 0 || evaluation === '') {
      setInputError(true);
      return;
    } else {
      const category = selectedCategory;
      onSubmit({ category, evaluation });
      setInputError(false);
      setSelectedCategory('');
      setEvaluation('');
    }
  }

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="category">Kategorie wählen:</label>
        {standardEvaluations.map((evaluation, key) => (
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
        <label>
          Bewertung wählen:
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            size={40}
            transition
            fillColor={`var(--color-button)`}
            emptyColor="gray"
          />
        </label>
        {inputError && rating === 0 && (
          <SubmitWarning>Bitte geben Sie eine Bewertung an.</SubmitWarning>
        )}
        <label htmlFor="evaluation">Worturteil:</label>
        {selectedCategory &&
          standardEvaluations.map((evaluation) =>
            evaluation.name === selectedCategory
              ? evaluation.evaluations.map((evaluation) =>
                  evaluation.mark === rating
                    ? evaluation.descriptions.map((description, key) => (
                        <EvaluationButton
                          key={`${description}-${key}`}
                          type="button"
                          onClick={() => setEvaluation(description)}
                          description={description}
                          selectedDescription={selectedEvaluation}
                        >
                          {description}
                        </EvaluationButton>
                      ))
                    : ''
                )
              : ''
          )}
        {/* <Textarea
          id="evaluation"
          rows={3}
          placeholder="Lena arbeitet häufig gut mit."
          onChange={(event: {
            target: { value: React.SetStateAction<string> };
          }) => setEvaluation(event.target.value)}
          value={evaluation}
          missingInput={inputError}
        /> */}
        {inputError && evaluation === '' && (
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

interface EvaluationButton {
  description: string;
  selectedDescription: string;
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

const EvaluationButton = styled.button.attrs<EvaluationButton>((props) => ({
  description: props.description,
  selectedDescription: props.selectedDescription,
}))`
  background: inherit;
  color: inherit;
  border: none;
  font-weight: ${(props) =>
    props.description === props.selectedDescription ? '800' : '400'};
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

const Textarea = styled.textarea<Partial<AddEvaluationFormProps>>`
  font-family: inherit;
  font-weight: 700;
  background: var(--color-background-dark);
  color: var(--color-text-white);
  padding: 0.5rem;
  outline: ${(props) =>
    props.missingInput && props.value === ''
      ? '2px solid var(--color-tertiary)'
      : ''};
`;

const SubmitWarning = styled.span`
  color: var(--color-tertiary);
  text-align: center;
`;
