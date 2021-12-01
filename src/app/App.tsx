import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClassOverview from './pages/ClassOverview/ClassOverview';
import PupilOverview from './pages/PupilOverview/PupilOverview';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<ClassOverview />} />
      <Route path="/pupil" element={<PupilOverview />}>
        <Route path=":pupilName" />
      </Route>
    </Routes>
  );
}
