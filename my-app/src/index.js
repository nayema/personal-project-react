import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import App from './containers/AppContainer';

// const enhancers = [applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f];
// const store = createStore(rootReducer, applyMiddleware(thunk);

const initialState = {};
const enhancers = [];
const middlewares = [
  thunk
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);


render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
);
