/**
 * action types
 */

export const ADD = 'remember/entries/ADD';
export const UPDATE = 'remember/entries/UPDATE';

/**
 * Creates a single entry object.
 */
function entry(state = {}, action) {

  switch (action.type) {

    case ADD:

      return {
        id: action.id,
        text: action.text
      };

    case UPDATE:

      return {
        ...state,
        id: action.id,
        text: action.text
      };

    default:

      return state
  }
}

/**
 * Reducer
 */
export default function reducer(state = {}, action) {

  switch (action.type) {

    case ADD:

      // cancel if entry already exists.
      if (state[action.id]) {
        return state;
      }

      return {
        ...state,
        [action.id]: entry(undefined, action)
      };

    case UPDATE:

      return {
        ...state,
        [action.id]: entry(state[action.id], action)
      };

    default:
      return state;
  }
}

/**
 * Action creators
 */

export function addEntry(entry) {

  return {
    type: ADD,
    ...entry
  };
}

export function updateEntry(entry) {

  return {
    type: UPDATE,
    ...entry
  };
}
