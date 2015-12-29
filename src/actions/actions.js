/**
 * action types
 */

export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';

/*
 * action creators
 */

export function addEntry(entry) {

  return {
    type: ADD_ENTRY,
    ...entry
  };
}

export function updateEntry(entry) {

  return {
    type: UPDATE_ENTRY,
    ...entry
  };
}
