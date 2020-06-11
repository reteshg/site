import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './components/home';
import FeatureList from './components/featureList';
import FeatureCreateTimelapse from './components/featureCreateTimelapse';
import FeatureVideoSettings from './components/featureVideoSettings';
import FeatureAudioSettings from './components/featureAudioSettings';
import FeatureIntroCredit from './components/featureIntroCredit';
import PrivacyPolicy from './components/privacyPolicy';
import Faqs from './components/faqs';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation title="The Timelapse App"/>
        <Route exact path="/" render={() => <Home title="The Timelapse App" />} />
        <Route path="/featureList" render={() => <FeatureList title="The Idea!" />} />
        <Route path="/featureCreateTimelapse" render={() => <FeatureCreateTimelapse title="Create Timelapse" />} />
        <Route path="/featureVideoSettings" render={() => <FeatureVideoSettings title="Video Settings" />} />
        <Route path="/featureAudioSettings" render={() => <FeatureAudioSettings title="Audio Settings" />} />
        <Route path="/featureIntroCredit" render={() => <FeatureIntroCredit title="Intro/Credit Slides" />} />
        <Route path="/faqs" render={() => <Faqs title="FAQs" />} />
        <Route path="/privacyPolicy" render={() => <PrivacyPolicy title="Privacy Policy" />} />
      </div>
      <div>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
