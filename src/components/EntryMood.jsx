/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';

/**
 * Import components
 */
import Mood from 'components/Mood.jsx';

class EntryMood extends Component {

  render() {

    return (
      <div className='entryForm-moods'>
        <Mood id={1} label='Happy' isChecked={true} />
        <Mood id={2} label='Meh' />
        <Mood id={3} label='Sad' />
      </div>
    );
  }
}

EntryMood.propTypes = {};

export default EntryMood;
