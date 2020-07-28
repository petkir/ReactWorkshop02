import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import { createStore,combineReducers, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import Root from './Root';
const epicMiddleware = createEpicMiddleware(aboutPage.epic);
const store = createStore(
              combineReducers({about: aboutPage.reducer, login: loginPage.reducer}),
              applyMiddleware(epicMiddleware)
            );

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
