import React from 'react';
// import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css';
import ScreenTwo from '../ScreenTwo/ScreenTwo';
import ScreenOne from '../ScreenOne/ScreenOne';
import ScreenThree from '../ScreenThree/ScreenThree';
import ScreenFour from '../ScreenFour/ScreenFour';
import ScreenFive from '../ScreenFive/ScreenFive';
import Success from '../Success/Success';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      <Route path='/' exact>
        <ScreenOne />
      </Route>
      <Route path='/screentwo' exact>
        <ScreenTwo />
      </Route>
      <Route path='/Screenthree' exact>
        <ScreenThree />
      </Route>
      <Route path='/screenfour' exact>
        <ScreenFour />
      </Route>
      <Route path='/screenfive' exact>
        <ScreenFive />
      </Route>
      <Route path='/success' exact>
        <Success />
      </Route>
      </div>
    </Router>
  );
}

export default App;
