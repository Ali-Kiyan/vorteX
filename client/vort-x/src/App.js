import React from 'react';
import './App.css';
import {Clock} from 'grommet'
import BoatRamps from './components/BoatRamps'
import BoatRampsPerMaterial from './components/BoatRampsPerMaterial'
import BoatRampsPerSize from './components/BoatRampsPerSize'

function App() {
  return (
    <div className="App">
      {/* <Clock type="digital"  style={{width: "30%", height: "70vh"}}/> */}
      <BoatRamps />
      <BoatRampsPerMaterial />
      <BoatRampsPerSize />
      <div style={{width: "70%", height: "70vh"}}>
      </div>
    </div>
  );
}

export default App;
