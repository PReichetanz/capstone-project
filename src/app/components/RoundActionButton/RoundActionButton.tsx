import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type DeleteButtonProps = {
  handleDelete: () => void;
  children: ReactNode;
};

export default function DeleteButton({
  handleDelete,
  children,
}: DeleteButtonProps): JSX.Element {
  return (
    <Container>
      <Button onClick={handleDelete}>{children}</Button>
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

const Button = styled.button`
  border: none;
  background: inherit;
  color: var(--color-buttonText);
  font-weight: 700;
`;
