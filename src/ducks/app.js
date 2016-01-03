/**
 * action types
 */

export const SHOW_HEADER_LINK = 'remember/app/SHOW_HEADER_LINK';
export const HIDE_HEADER_LINK = 'remember/app/HIDE_HEADER_LINK';

const initialState = {
  displayHeaderLink: false
};

/**
 * Reducer
 */
export default function reducer(state = initialState, action) {

  switch (action.type) {

    case SHOW_HEADER_LINK:

      return {
        ...state,
        displayHeaderLink: true
      };

    case HIDE_HEADER_LINK:

      return {
        ...state,
        displayHeaderLink: false
      };

    default:
      return state;
  }
}

/**
 * Action creators
 */

export function showHeaderLink() {

  return {
    type: SHOW_HEADER_LINK
  };
}

export function hideHeaderLink() {

  return {
    type: HIDE_HEADER_LINK
  };
}
