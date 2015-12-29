import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { ADD_ENTRY } from 'actions/actions.js';

function entry(state = {}, action) {

  switch (action.type) {

    case ADD_ENTRY:

      return {
        id: action.id
      };

    default:

      return state
  }
}

function entries(state = [], action) {

  switch (action.type) {

    case ADD_ENTRY:

      return [
        ...state,
        entry(undefined, action)
      ];

    default:

      return state;
  }
}

const app = combineReducers({
  entries,
  routing: routeReducer
});

export default app;
