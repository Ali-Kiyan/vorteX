import React from 'react';
import './App.css';
import { DefaultButton } from './components/shared_components/DefaultButton'
import {Clock} from 'grommet'
import Main from './containers/main_container'

function App() {
  return (
    <div className="App">
      <Clock type="digital" />
      <DefaultButton name="click me" onClick={()=>alert("hi")} color="black" />
      <Main />
      <p>this</p>
    </div>
  );
}

export default App;
