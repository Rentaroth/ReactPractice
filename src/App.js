import React from 'react';
import { CvContext } from './Context';
import { Content } from './Content';
import './App.css';

function App() {
  return (
    <CvContext>
      <Content />
    </CvContext>
  );
}

export default App;
