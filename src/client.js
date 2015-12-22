import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rememberApp from 'reducers/reducers.js'
import App from 'containers/App.jsx';

let store = createStore(rememberApp)

let rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
