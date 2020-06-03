import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import Features from './components/features';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation title="The Timelapse App"/>
        <Route exact path="/" render={() => <Home title="This is homepage" active="active" />} />
        <Route path="/features" render={() => <Features title="This is feature page" active="active" />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
