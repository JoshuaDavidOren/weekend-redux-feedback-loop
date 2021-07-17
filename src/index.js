import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from "redux-logger";

// Reducers
const welcomeToTheStore = (state = ['Hi do you have any peaches'], action) => {
  return state
}

const angryReducer = (state = '', action)  => {
  if (action.type === 'SCREAMING_SNAKE_CASE'){
    return action.payload;
  }
  return state;
}
// Store
const theStore = createStore(
  combineReducers({
    welcomeToTheStore,
    angryReducer
  }),
  applyMiddleware(logger)
)


// Provider
ReactDOM.render(
  <React.StrictMode>
    <Provider store={theStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

