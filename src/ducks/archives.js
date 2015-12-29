import _ from 'lodash';
import { ADD } from 'ducks/entries';

export default function reducer(state = [], action) {

  switch (action.type) {

    case ADD:

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
