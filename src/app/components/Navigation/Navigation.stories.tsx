import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

export const SingleNavigation = (): JSX.Element => (
  <Navigation
    isFormNavigation={false}
    showForm={() => console.log('Show Form here')}
  ></Navigation>
);

export const FormNavigation = (): JSX.Element => (
  <Navigation
    isFormNavigation={true}
    navigateBack={() => console.log('back')}
  ></Navigation>
);

export const GeneralNavigation = (): JSX.Element => (
  <Navigation
    isFormNavigation={false}
    showForm={() => console.log('Show Form here')}
    navigateButton={true}
    navigateBack={() => console.log('back')}
  ></Navigation>
);
