import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';

type FormProps = {
  onSubmit: (pupil: { category: string; evaluation: string }) => void;
  onCancel: () => void;
  missingInput: boolean;
};

export default function Form({ onSubmit, onCancel }: FormProps): JSX.Element {
  const [category, setCategory] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [inputError, setInputError] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (category === '' || evaluation === '') {
      setInputError(true);
      return;
    } else {
      onSubmit({ category, evaluation });
      setInputError(false);
      setCategory('');
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
          missingInput={inputError}
        />
        {inputError && category === '' && (
          <SubmitWarning>Bitte geben Sie eine Kategorie ein.</SubmitWarning>
        )}
        <label htmlFor="evaluation">Worturteil:</label>
        <Textarea
          id="evaluation"
          rows={3}
          placeholder="Lena arbeitet häufig gut mit."
          onChange={(event) => setEvaluation(event.target.value)}
          value={evaluation}
          missingInput={inputError}
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
    props.missingInput && props.value === ''
      ? '2px solid var(--color-tertiary)'
      : ''};
`;

const Textarea = styled.textarea<Partial<FormProps>>`
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
