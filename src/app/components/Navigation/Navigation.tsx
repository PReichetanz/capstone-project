import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

type NavigationProps = {
  isFormNavigation: boolean;
  showForm?: () => void;
  navigateButton?: boolean;
  navigateBack?: () => void;
};

export default function Navigation({
  showForm,
  navigateButton,
  navigateBack,
  isFormNavigation,
}: NavigationProps): JSX.Element {
  return (
    <Nav>
      {isFormNavigation || navigateButton ? (
        <BackButton onClick={navigateBack}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
            <path
              d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM2 13.5L24 13.5L24 10.5L2 10.5L2 13.5Z"
              fill="#001E1D"
            />
          </svg>
        </BackButton>
      ) : (
        ''
      )}
      {isFormNavigation ? (
        <Button type="submit">Hinzufügen</Button>
      ) : (
        <Button onClick={showForm}>Hinzufügen</Button>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  background: var(--color-background-light);
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
`;

const BackButton = styled(Button)`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;
