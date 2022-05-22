import React, { useEffect, useState } from 'react';
import Rating from '../Rating/Rating';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';

type FormProps = {
  onSubmit: (category: string, mark: number, evaluation: string) => void;
  onCancel: () => void;
  missingInputAfterSubmit: boolean;
  chosenCategory?: string;
  chosenRating?: number;
};

export default function Form({
  onSubmit,
  onCancel,
  chosenCategory,
  chosenRating,
}: FormProps): JSX.Element {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [evaluation, setEvaluation] = useState('');
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if (chosenCategory && chosenRating) {
      setCategory(chosenCategory);
      setRating(chosenRating);
    }
  }, [rating]);

  function handleRating(rate: number) {
    setRating(rate);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (category === '' || rating === 0 || evaluation === '') {
      setInputError(true);
      return;
    } else {
      onSubmit(category, rating, evaluation);
      setInputError(false);
      setCategory('');
      setRating(0);
      setEvaluation('');
    }
  }

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="category">Kategorie wählen:</label>
        <Input
          type="text"
          id="category"
          placeholder="Arbeitsweise"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
          missingInputAfterSubmit={inputError}
        />
        {inputError && category === '' && (
          <SubmitWarning>Bitte geben Sie eine Kategorie ein.</SubmitWarning>
        )}
        <label>
          Bewertung wählen:
          <Rating selectedRating={rating} onRatingClick={handleRating} />
        </label>
        {inputError && rating === 0 && (
          <SubmitWarning>Bitte geben Sie eine Bewertung an.</SubmitWarning>
        )}
        <label htmlFor="evaluation">Neues Worturteil:</label>
        <Note>Hinweis: Ersetzen Sie den Schülernamen mit 'X'.</Note>
        <Textarea
          id="evaluation"
          rows={3}
          placeholder="Beispiel: X arbeitet häufig gut mit."
          onChange={(event) => setEvaluation(event.target.value)}
          value={evaluation}
          missingInputAfterSubmit={inputError}
        />
        {inputError && evaluation === '' && (
          <SubmitWarning>Bitte geben Sie eine Beurteilung ein.</SubmitWarning>
        )}
        <Navigation navigateBack={() => onCancel()} isFormNavigation={true} />
      </FormContainer>
    </FormWrapper>
  );
}

const FormContainer = styled.form`
  background: var(--color-background-light);
  color: var(--color-text-dark);
  border: 1px solid var(--color-stroke);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  font-weight: 700;
  position: absolute;
  z-index: 100;
  left: 0.6rem;
  right: 0.6rem;
  top: 8rem;
`;

const FormWrapper = styled.div`
  position: relative;
`;

const Input = styled.input<Partial<FormProps>>`
  font-family: inherit;
  font-weight: 700;
  background: var(--color-background-dark);
  color: var(--color-text-white);
  padding: 0.5rem;
  outline: ${(props) =>
    props.missingInputAfterSubmit && props.value === ''
      ? '2px solid var(--color-tertiary)'
      : ''};
`;

const Note = styled.span`
  font-size: 0.75rem;
`;
const Textarea = styled.textarea<Partial<FormProps>>`
  font-family: inherit;
  font-weight: 700;
  background: var(--color-background-dark);
  color: var(--color-text-white);
  padding: 0.5rem;
  outline: ${(props) =>
    props.missingInputAfterSubmit && props.value === ''
      ? '2px solid var(--color-tertiary)'
      : ''};
`;

const SubmitWarning = styled.span`
  color: var(--color-tertiary);
  text-align: center;
`;
