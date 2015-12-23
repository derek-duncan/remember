import { combineReducers } from 'redux';
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

function entries(state = { items: [] }, action) {

  switch (action.type) {

    case ADD_ENTRY:
      let newState = Object.assign({}, state, {
          items: [
            ...state.items,
            entry(undefined, action)
          ]
        }
      );
      return newState;

    default:
      return state;
  }
}

export default combineReducers({
  entries
});
