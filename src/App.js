import React from 'react';
import { Heading } from './components/Heading';
import {Balance } from './components/Balance';

import './App.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="container">
        <Balance/>
      </div>
    </div>
  );
}

export default App;
