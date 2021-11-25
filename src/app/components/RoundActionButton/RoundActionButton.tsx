import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type RoundActionButtonProps = {
  handleClick: () => void;
  children: ReactNode;
  customStyles?: {
    sizeButton?: string;
    topPosition?: string;
    rightPosition?: string;
  };
};

export default function RoundActionButton({
  handleClick,
  children,
  customStyles,
}: RoundActionButtonProps): JSX.Element {
  return (
    <Button
      customStyles={customStyles ? customStyles : {}}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

interface StylingProps {
  customStyles: {
    sizeButton?: string;
    topPosition?: string;
    rightPosition?: string;
  };
}

const Button = styled.button.attrs<StylingProps>((props) => ({
  customStyles: {
    sizeButton: props.customStyles.sizeButton || '2rem',
    topPosition: props.customStyles.topPosition || '0.25rem',
    rightPosition: props.customStyles.rightPosition || '0.25rem',
  },
}))`
  position: absolute;
  right: ${({ customStyles }: StylingProps) => customStyles.rightPosition};
  top: ${({ customStyles }: StylingProps) => customStyles.topPosition};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ customStyles }: StylingProps) => customStyles.sizeButton};
  height: ${({ customStyles }: StylingProps) => customStyles.sizeButton};
  background: var(--color-tertiary);
  border-radius: 50%;
  border: 1px solid var(--color-stroke);
  padding: 0.625rem;
  color: var(--color-buttonText);
  font-weight: 700;
`;
