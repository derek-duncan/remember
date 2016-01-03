import _ from 'lodash';
import { ADD, UPDATE } from 'ducks/entries';

export default function reducer(state = [], action) {

  switch (action.type) {

    case ADD:
    case UPDATE:

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
