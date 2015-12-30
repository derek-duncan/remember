import moment from 'moment';
import shortid from 'shortid';

/**
 * action types
 */

export const ADD = 'remember/entries/ADD';
export const UPDATE = 'remember/entries/UPDATE';

/**
 * Creates a single entry object.
 */
function entry(state = {}, action) {

  const { type, id, text, mood } = action;

  switch (type) {

    case ADD:
    case UPDATE:

      const { id, text, mood } = action;

      let timestamp = moment().format('YYYYMMDD');

      if (id) {

        state.id = id;
      } else {

        state.id = timestamp;
      }

      if (!state.timestamp) {

        state.timestamp = timestamp;
      }

      if (text) {
        state.text = text;
      }

      if (mood) {
        state.mood = mood;
      }

      return state;

    default:

      return state;
  }
}

/**
 * Reducer
 */
export default function reducer(state = {}, action) {

  switch (action.type) {

    case ADD:

      // cancel if entry already exists.
      let exists = state[action.id];
      if (exists) {

        let tomorrow = moment().add(1, 'day').format('YYYYMMDD');
        if (moment(exists.id, 'YYYYMMDD').isBefore(tomorrow)) {

          return state;
        }
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
