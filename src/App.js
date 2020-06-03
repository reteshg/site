import React from 'react';
import {BorwserRouter, BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Features from './components/features';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="The Timelapse App"/>
        <Home title="Homepage New"/>
        <Features/>
      </div>
    </BrowserRouter>
  );
}

export default App;
