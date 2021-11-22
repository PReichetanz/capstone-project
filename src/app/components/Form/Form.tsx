import React from 'react';
import styled from 'styled-components';

type FormProps = {
  nameLabel: string;
  evaluationLabel: string;
  name?: string;
  evaluation?: string;
  onSubmitForm: () => void;
};

export default function Form({
  nameLabel,
  evaluationLabel,
  name,
  evaluation,
  onSubmitForm,
}: FormProps): JSX.Element {
  function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    onSubmitForm();
    console.log(name);
    console.log(evaluation);
  }

  return (
    <FormContainer onSubmit={() => handleSubmit}>
      <label htmlFor="name">{nameLabel}:</label>
      <Input
        type="text"
        id="name"
        placeholder="Lena Beispiel"
        onChange={(event) => event.target.value}
        value={name}
        required
      />
      <span>Bitte geben Sie einen Namen ein.</span>
      <label htmlFor="evaluation">{evaluationLabel}:</label>
      <Textarea
        id="evaluation"
        rows={3}
        placeholder="Lena arbeitet häufig gut mit."
        onChange={(event) => event.target.value}
        value={evaluation}
        required
      />
      <SubmitButton type="submit">Hinzufügen</SubmitButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  background: var(--color-background-light);
  color: var(--color-text-dark);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  font-weight: 700;
`;

const Input = styled.input`
  font-family: inherit;
  :required {
    border: 2px solid var(--color-tertiary);
  }
`;

const Textarea = styled.textarea`
  font-family: inherit;
`;

const SubmitButton = styled.button`
  background: var(--color-button);
  border-radius: 0.5rem;
  border: 1px solid var(--color-stroke);
  font-weight: 700;
  padding: 0.5rem;
`;
