import React from 'react'
import { originals, Action } from './urls';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Rowpost from './Components/Rowpost/Rowpost';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={Action} title='Action' isSmall/>
    </div>
  );
}

export default App;
