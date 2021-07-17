import React from 'react';
import axios from 'axios';
import './App.css';

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
      <Route path='/screenTwo' exact>
        <ScreenTwo />
      </Route>
      <Route path='/ScreenThree' exact>
        <ScreenThree />
      </Route>
      <Route path='/screenFour' exact>
        <ScreenFour />
      </Route>
      <Route path='/screenFive' exact>
        <ScreenFive />
      </Route>
      </div>
    </Router>
  );
}

export default App;
