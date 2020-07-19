import React from 'react';
import './App.css';
import { DefaultButton } from './components/shared_components/DefaultButton'
import {Clock} from 'grommet'
import BoatRamps from './components/BoatRamps'
import BoatRampsPerMaterial from './components/BoatRampsPerMaterial'

function App() {
  return (
    <div className="App">
      <Clock type="digital" />
      <DefaultButton name="click me" onClick={()=>alert("hi")} color="black" />
      <BoatRamps />
      <BoatRampsPerMaterial />
      <p>this</p>
    </div>
  );
}

export default App;
