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
  return <Delete onClick={handleDelete}>{content}</Delete>;
}

const Delete = styled.button`
  background: var(--color-tertiary);
  border-radius: 50%;
  border: 1px solid var(--color-stroke);
  padding: 0.625rem;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  &:hover {
    background: var(--color-tertiary-hover);
    font-weight: 700;
  }
`;
