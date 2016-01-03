import React from 'react';
import 'fastclick';
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router';

/**
 * Import components
 */
import AppContainer from 'containers/AppContainer.jsx';
import EntryFormContainer from 'containers/EntryFormContainer.jsx';
import ArchiveContainer from 'containers/ArchiveContainer.jsx';
import EntryContainer from 'containers/EntryContainer.jsx';
import configureStore from 'store/configureStore';

const { store, history } = configureStore();

let rootElement = document.getElementById('root');
render(
  <Provider store={store}>

    <Router history={history}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={EntryFormContainer}/>
        <Route path='new' component={EntryFormContainer}/>
        <Route path='archive' component={ArchiveContainer}/>
        <Route path='entry/:entryId' component={EntryContainer}/>
      </Route>
    </Router>
  </Provider>,
  rootElement
);
