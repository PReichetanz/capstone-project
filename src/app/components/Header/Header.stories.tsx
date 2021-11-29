import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const Dark = (): JSX.Element => <Header>Meine Klasse</Header>;

export const Light = (): JSX.Element => (
  <Header backgroundLight={true}>Schüler hinzufügen</Header>
);
