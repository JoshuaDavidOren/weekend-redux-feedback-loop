import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// import logger from "redux-logger";

// Reducers

// Store

// Provider
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
registerServiceWorker();
