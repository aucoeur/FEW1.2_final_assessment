import React from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import BandList from './components/BandList/BandList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <div className="BandList">
        <BandList />
      </div>
    </div>
  );
}

export default App;
