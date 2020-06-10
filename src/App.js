import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import FeatureList from './components/featureList';
import FeatureCreateTimelapse from './components/featureCreateTimelapse';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation title="The Timelapse App"/>
        <Route exact path="/" render={() => <Home title="This is homepage" />} />
        <Route path="/featureList" render={() => <FeatureList title="Feature List" />} />
        <Route path="/featureCreateTimelapse" render={() => <FeatureCreateTimelapse title="Create Timelapse" />} />
        <Route path="/featureVideoSettings" render={() => <FeatureCreateTimelapse title="Video Settings" />} />
      </div>
      <div>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
