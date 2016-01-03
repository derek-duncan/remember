import moment from 'moment';
import shortid from 'shortid';
import _ from 'lodash';
import { getCurrentTimestamp } from 'utils/timeUtils';

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

      state.id = id;

      if (!state.timestamp) {

        state.timestamp = getCurrentTimestamp();
      }

      if (text) {
        state.text = _.trim(text);
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
        let tomorrow = moment().add(1, 'day');
        if (moment(exists.timestamp).isBefore(tomorrow)) {

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
