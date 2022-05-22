import React, { useState } from 'react';
// import { Rating } from 'react-simple-star-rating';
import Rating from '../Rating/Rating';
import styled from 'styled-components';
import useEvaluations from '../../hooks/useEvaluations';
import type { Pupil } from '../../types/types';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import NewEvaluationForm from '../NewEvaluationForm/NewEvaluationForm';

type AddEvaluationFormProps = {
  pupil: Pupil;
  onSubmit: (category: string, evaluation: string) => void;
  onCancel: () => void;
  missingInputAfterSubmit: boolean;
};

export default function AddEvaluationForm({
  pupil,
  onSubmit,
  onCancel,
}: AddEvaluationFormProps): JSX.Element {
  const { evaluations, addNewEvaluation } = useEvaluations();
  const [isNewEvaluationFormShown, setIsNewEvaluationFormShown] =
    useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEvaluation, setSelectedEvaluation] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [inputError, setInputError] = useState(false);
  console.log('selectedCategory', selectedCategory);
  console.log('selectedRating', selectedRating);
  console.log('selectedEvaluation', selectedEvaluation);
  console.log('inputError:', inputError);
  console.log('evaluations', evaluations);

  function handleRating(rate: number) {
    setSelectedRating(rate);
  }

  function handleCategory(category: string) {
    setSelectedCategory(category);
  }

  function handleNewEvaluation(
    category: string,
    rating: number,
    evaluation: string
  ) {
    addNewEvaluation(category, rating, evaluation);
    setIsNewEvaluationFormShown(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      selectedCategory === '' ||
      selectedRating === 0 ||
      selectedEvaluation === ''
    ) {
      setInputError(true);
      return;
    }
    const category = selectedCategory;
    const evaluation = selectedEvaluation;
    onSubmit(category, evaluation);
    setInputError(false);
    setSelectedCategory('');
    setSelectedEvaluation('');
    setSelectedRating(0);
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
        <Rating selectedRating={selectedRating} onRatingClick={handleRating} />
        {inputError && selectedRating === 0 && (
          <SubmitWarning>Bitte geben Sie eine Bewertung an.</SubmitWarning>
        )}
        <label htmlFor="evaluation">Worturteil:</label>
        {selectedCategory &&
          evaluations.map((evaluation) =>
            evaluation.name === selectedCategory
              ? evaluation.valuations.map((valuation) =>
                  valuation.mark === selectedRating ? (
                    valuation.descriptions.length > 0 ? (
                      valuation.descriptions.map((description, key) => (
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
                    ) : (
                      <EvaluationButton
                        key="missingEvaluation"
                        type="button"
                        onClick={() => setIsNewEvaluationFormShown(true)}
                      >
                        Ooops! Noch kein Worturteil vorhanden, neues hinzufügen?
                      </EvaluationButton>
                    )
                  ) : (
                    ''
                  )
                )
              : ''
          )}
        {inputError && selectedEvaluation === '' && (
          <SubmitWarning>Bitte geben Sie eine Beurteilung ein.</SubmitWarning>
        )}
        <Navigation navigateBack={() => onCancel()} isFormNavigation={true} />
      </FormContainer>
      {isNewEvaluationFormShown && (
        <NewEvaluationForm
          onSubmit={handleNewEvaluation}
          onCancel={() => setIsNewEvaluationFormShown(false)}
          missingInputAfterSubmit={false}
          chosenCategory={selectedCategory}
          chosenRating={selectedRating}
        />
      )}
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

const EvaluationButton = styled.button<{ isActive?: boolean }>`
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
