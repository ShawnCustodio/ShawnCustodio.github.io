import React from 'react';
import './App.css';
import PianoKeys from './components/PianoKeys/PianoKeys';

function App() {
  return (
    <div className="App">
       <h2>Piano Key Descriptions:</h2>
        <p>Press the A Key on your keyboard for the A note</p>
        <p>Press the B Key on your keyboard for the B note</p>
        <p>Press the C Key on your keyboard for the C note</p>
        <p>Press the D Key on your keyboard for the D note</p>
        <p>Press the E Key on your keyboard for the E note</p>
        <p>Press the F Key on your keyboard for the F note</p>
        <p>Press the G Key on your keyboard for the G note</p>
        <p>Press any other key and a sound will not play</p>
      <div className="center-container">
        <PianoKeys />
      </div>
    </div>
  );
}

export default App;
