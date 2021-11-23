import React, { useState } from 'react';
import styled from 'styled-components';

type FormProps = {
  nameLabel: string;
  evaluationLabel: string;
  onSubmit: (pupil: { name: string; evaluation: string }) => void;
  submitted: boolean;
};

export default function Form({
  nameLabel,
  evaluationLabel,
  onSubmit,
}: FormProps): JSX.Element {
  const [name, setName] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [evaluationSubmitted, setEvaluationSubmitted] = useState(false);
  console.log(`nameSubmitted: ${nameSubmitted}`);
  console.log(`evaluationSubmitted: ${evaluationSubmitted}`);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name === '') {
      setNameSubmitted(!nameSubmitted);
      return;
    } else if (evaluation === '') {
      setEvaluationSubmitted(!evaluationSubmitted);
      return;
    } else {
      onSubmit({ name, evaluation });
      setNameSubmitted(false);
      setEvaluationSubmitted(false);
      setName('');
      setEvaluation('');
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="name">{nameLabel}:</label>
      <Input
        type="text"
        id="name"
        placeholder="Lena Beispiel"
        onChange={(event) => setName(event.target.value)}
        value={name}
        submitted={nameSubmitted}
      />
      {nameSubmitted && name === '' ? (
        <SubmitWarning>Bitte geben Sie einen Namen ein.</SubmitWarning>
      ) : (
        ''
      )}
      <label htmlFor="evaluation">{evaluationLabel}:</label>
      <Textarea
        id="evaluation"
        rows={3}
        placeholder="Lena arbeitet häufig gut mit."
        onChange={(event) => setEvaluation(event.target.value)}
        value={evaluation}
        submitted={evaluationSubmitted}
      />
      {evaluationSubmitted && evaluation === '' ? (
        <SubmitWarning>Bitte geben Sie eine Beurteilung ein.</SubmitWarning>
      ) : (
        ''
      )}
      <SubmitButton type="submit" value="Hinzufügen" />
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

const Input = styled.input<Partial<FormProps>>`
  font-family: inherit;
  outline: ${(props) =>
    props.submitted ? '2px solid var(--color-tertiary)' : ''};
`;

const Textarea = styled.textarea<Partial<FormProps>>`
  font-family: inherit;
  outline: ${(props) =>
    props.submitted ? '2px solid var(--color-tertiary)' : ''};
`;

const SubmitWarning = styled.span`
  color: var(--color-tertiary);
  text-align: center;
`;

const SubmitButton = styled.input`
  background: var(--color-button);
  border-radius: 0.5rem;
  border: 1px solid var(--color-stroke);
  font-weight: 700;
  padding: 0.5rem;
`;
