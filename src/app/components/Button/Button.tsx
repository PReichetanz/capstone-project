import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  handleClick: () => void;
};
function Button({ children, handleClick }: ButtonProps): JSX.Element {
  return <NewButton onClick={handleClick}>{children}</NewButton>;
}

export default Button;

const NewButton = styled.button`
  background: var(--color-button);
  border-radius: 0.5rem;
  border: 1px solid var(--color-stroke);
  font-weight: 700;
  padding: 0.5rem;
  display: block;
  width: 90%;
  margin: auto;
`;
