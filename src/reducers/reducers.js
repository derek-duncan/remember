import { combineReducers } from 'redux';
import { ADD_ENTRY } from 'actions/actions.js';

const initialState = {
  entries: []
};

function entry(state = initialState, action) {

  switch (action.type) {

    case ADD_ENTRY:
      return {
        id: action.id
      };

    default:
      return state
  }
}

function entries(state = initialState, action) {

  switch (action.type) {

    case ADD_ENTRY:
      return Object.assign({}, state, {
          entries: [
            ...state.entries,
            entry(undefined, action)
          ]
        }
      );

    default:
      return state;
  }
}

export default combineReducers({
  entries
});
