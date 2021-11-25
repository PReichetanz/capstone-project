import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  handleClick: () => void;
};
export default function MainButton({
  children,
  handleClick,
}: ButtonProps): JSX.Element {
  return <Button onClick={handleClick}>{children}</Button>;
}

const Button = styled.button`
  background: var(--color-button);
  border-radius: 0.5rem;
  border: 1px solid var(--color-stroke);
  font-weight: 700;
  padding: 0.5rem;
  display: block;
  width: 90%;
  margin: auto;
`;
