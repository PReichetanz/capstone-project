import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type RoundActionButtonProps = {
  handleDelete: () => void;
  children: ReactNode;
};

export default function RoundActionButton({
  handleDelete,
  children,
}: RoundActionButtonProps): JSX.Element {
  return <Button onClick={handleDelete}>{children}</Button>;
}

interface StylingProps {
  sizeButton?: string;
  topPosition?: string;
  rightPosition?: string;
}

const Button = styled.button.attrs<StylingProps>((props) => ({
  sizeButton: props.sizeButton || '2rem',
  topPosition: props.topPosition || '0.25rem',
  rightPosition: props.rightPosition || '0.25rem',
}))`
  position: absolute;
  right: ${(props: StylingProps) => props.rightPosition};
  top: ${(props: StylingProps) => props.topPosition};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: StylingProps) => props.sizeButton};
  height: ${(props: StylingProps) => props.sizeButton};
  background: var(--color-tertiary);
  border-radius: 50%;
  border: 1px solid var(--color-stroke);
  padding: 0.625rem;
  color: var(--color-buttonText);
  font-weight: 700;
`;
