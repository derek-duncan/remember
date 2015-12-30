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

    const { onMoodClick, selected } = this.props;

    return (
      <div className='entryForm-moods'>
        <Mood onMoodClick={ onMoodClick } id={1} label='Happy' isChecked={selected === 1} />
        <Mood onMoodClick={ onMoodClick } id={2} label='Meh' isChecked={selected === 2} />
        <Mood onMoodClick={ onMoodClick } id={3} label='Sad' isChecked={selected === 3} />
      </div>
    );
  }
}

EntryMood.propTypes = {
  onMoodClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired
};

export default EntryMood;
