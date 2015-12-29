import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import entries from 'ducks/entries';
import archives from 'ducks/archives';

const rootReducer = combineReducers({
  entries,
  archives,
  routing: routeReducer
});

export default rootReducer;
