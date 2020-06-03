import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Features from './components/features';

function App() {
  return (
    <div className="App">
      <Navbar title="The Timelapse App"/>
      <Home title="Homepage New"/>
      <Features/>
    </div>
  );
}

export default App;
