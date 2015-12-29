import _ from 'lodash';
import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { ADD_ENTRY, UPDATE_ENTRY } from 'actions/actions.js';

function entity(state = {}, action) {

  switch (action.type) {

    case ADD_ENTRY:

      return {
        id: action.id,
        text: action.text
      };

    case UPDATE_ENTRY:

      return {
        ...state,
        id: action.id,
        text: action.text
      };

    default:

      return state
  }
}

function entities(state = {}, action) {

  switch (action.type) {

    case ADD_ENTRY:

      // cancel if entity already exists.
      if (state[action.id]) {
        return state;
      }

      return {
        ...state,
        [action.id]: entity(undefined, action)
      };

    case UPDATE_ENTRY:

      return {
        ...state,
        [action.id]: entity(state[action.id], action)
      };

    default:
      return state;
  }
}

function archive(state = [], action) {

  switch (action.type) {

    case ADD_ENTRY:

      // cancel if entity already exists.
      if (_.includes(state, action.id)) {
        return state;
      }

      return [
        ...state,
        action.id
      ];

    default:
      return state;
  }
}

const app = combineReducers({
  entities,
  archive,
  routing: routeReducer
});

export default app;
