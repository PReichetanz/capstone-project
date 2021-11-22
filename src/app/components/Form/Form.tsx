import React from 'react';
import styled from 'styled-components';

export default function Form(): JSX.Element {
  return (
    <FormContainer>
      <label htmlFor="name">Name des Schülers:</label>
      <input type="text" id="name" placeholder="Lena Beispiel" required />
      <label htmlFor="evaluation">Worturteil:</label>
      <textarea
        id="evaluation"
        rows={3}
        placeholder="Lena arbeitet häufig gut mit."
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

const SubmitButton = styled.button`
  background: var(--color-button);
  border-radius: 0.5rem;
  border: 1px solid var(--color-stroke);
  font-weight: 700;
  padding: 0.5rem;
`;
