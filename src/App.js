import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Features from './components/features';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar title="The Timelapse App"/>
        <Route exact path="/" render={() => <Home title="This is homepage" />} />
        <Route path="/features" render={() => <Features title="This is feature page" />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
