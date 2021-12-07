import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';

type FormProps = {
  onSubmit: (pupil: { name: string }) => void;
  onCancel: () => void;
  missingInput: boolean;
};

export default function Form({ onSubmit, onCancel }: FormProps): JSX.Element {
  const [name, setName] = useState('');
  const [inputError, setInputError] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name === '') {
      setInputError(true);
      return;
    } else {
      onSubmit({ name });
      setInputError(false);
      setName('');
    }
  }

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="name">Name des Schülers:</label>
        <Input
          type="text"
          id="name"
          placeholder="Lena Beispiel"
          onChange={(event) => setName(event.target.value)}
          value={name}
          missingInput={inputError}
        />
        {inputError && name === '' && (
          <SubmitWarning>Bitte geben Sie einen Namen ein.</SubmitWarning>
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

const SubmitWarning = styled.span`
  color: var(--color-tertiary);
  text-align: center;
`;
