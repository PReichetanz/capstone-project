import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  children: ReactNode;
  backgroundLight?: boolean;
};

export default function Header({
  children,
  backgroundLight,
}: HeaderProps): JSX.Element {
  const background = backgroundLight;
  return (
    <Container backgroundLight={background}>
      <h1>{children}</h1>
    </Container>
  );
}

const Container = styled.div<Partial<HeaderProps>>`
  grid-row: 1/ 2;
  display: flex;
  padding-left: 1rem;
  border-bottom: 1px solid var(--color-stroke);
  background: ${(props) =>
    props.backgroundLight
      ? 'var(--color-background-light)'
      : 'var(--color-background-dark)'};
  color: ${(props) =>
    props.backgroundLight
      ? 'var(--color-text-dark)'
      : 'var(--color-text-white)'};
`;
