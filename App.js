import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Plant from './Plants';
import {Routes, Route} from 'react-router-dom'
import Counter from './NewPlant';
import './styles.css';

function App() {
  return (
  <div className='App'>
    <Routes> 
      <Route path ='/' element = {<Home/>} />
      <Route exact path ='/newPlant' element = {<Counter/>} />
      <Route exact path ='/plant' element = {<Plant/>} />
    </Routes>

  </div>
  );
  
}

export default App;
