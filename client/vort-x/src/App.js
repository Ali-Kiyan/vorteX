import React from 'react';
import './App.css';
import {Clock} from 'grommet'
import BoatRamps from './components/BoatRamps'
import BoatRampsPerMaterial from './components/BoatRampsPerMaterial'
import BoatRampsPerSize from './components/BoatRampsPerSize'

function App() {
  return (
    <div className="App">
      <Clock type="digital" size="xlarge" style={{position: "absolute", top: 0, right:0}}/>
      <BoatRamps />
      <BoatRampsPerMaterial />
      <BoatRampsPerSize />
    </div>
  );
}

export default App;
