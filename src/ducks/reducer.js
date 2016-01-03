import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import entries from 'ducks/entries';
import archives from 'ducks/archives';
import app from 'ducks/app';

const rootReducer = combineReducers({
  entries,
  archives,
  routing: routeReducer,
  app
});

export default rootReducer;
