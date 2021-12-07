import type { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  category?: string;
  selectedCategory?: string;
};

const Button = styled.button<ButtonProps>`
  background: var(--color-button);
  border-radius: 0.5rem;
  border: 1px solid var(--color-stroke);
  font-weight: 700;
  padding: 0.5rem;
  display: block;
  width: 90%;
  margin: auto;
`;

export default Button;
