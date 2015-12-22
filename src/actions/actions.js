/**
 * action types
 */

export const ADD_ENTRY = 'ADD_ENTRY';

/*
 * action creators
 */

var idCounter = 0;
export function addEntry(entry) {

  return {
    type: ADD_ENTRY,
    id: idCounter++
  };
}
