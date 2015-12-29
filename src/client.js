import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';
import rootReducer from 'ducks/reducer';

/**
 * Import components
 */
import App from 'containers/App.jsx';
import EntryForm from 'containers/EntryForm.jsx';
import Archive from 'containers/Archive.jsx';

const history = createHistory();
const store = createStore(rootReducer);

syncReduxAndRouter(history, store);

let rootElement = document.getElementById('root');
render(
  <Provider store={store}>

    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={EntryForm}/>
        <Route path='new' component={EntryForm}/>
        <Route path='archive' component={Archive}/>
      </Route>
    </Router>
  </Provider>,
  rootElement
);
