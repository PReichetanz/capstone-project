import React from 'react';
import styled from 'styled-components';

type DeleteButtonProps = {
  handleDelete: () => void;
  content: string;
};

export default function DeleteButton({
  handleDelete,
  content,
}: DeleteButtonProps): JSX.Element {
  return (
    <Container>
      <Delete onClick={handleDelete}>{content}</Delete>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-tertiary);
  border-radius: 50%;
  border: 1px solid var(--color-stroke);
  padding: 0.625rem;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  &:hover {
    background: var(--color-tertiary-hover);
  }
`;

const Delete = styled.button`
  border: none;
  background: inherit;
  color: var(--color-buttonText);
  font-weight: 700;
`;
