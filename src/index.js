import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from "redux-logger";

// Reducers

const feelingsReducer = (state = '', action)  => {
  if (action.type === "SCREAMING-CABOB-CASE"){
    return action.payload;
  }
  return state;
}
const supportReducer = (state = '', action) => {
  if (action.type === "SCREAMING_SNAKE_CASE") {
    return action.payload;
  }
  return state;
};
const understandingReducer = (state = '', action) => {
  if (action.type === "SCREAMING_SNAKE-CABOB_CASE") {
    return action.payload;
  }
  return state;
};
const commentsReducer = (state = "", action) => {
  if (action.type === "cameled_SCREAMS-with_SNAKES-and_CABOBS-case") {
    return action.payload;
  }
  return state;
};
// Store
const theStore = createStore(
  combineReducers({
    feelingsReducer,
    understandingReducer,
    commentsReducer,
    supportReducer
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

