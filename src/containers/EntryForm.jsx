/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import { addEntry } from 'actions/actions.js';

/**
 * Import components
 */
import EntryDate from 'components/EntryDate.jsx';
import EntryLocation from 'components/EntryLocation.jsx';
import EntryMood from 'components/EntryMood.jsx';

class EntryForm extends Component {

  render() {

    const { entry } = this.props;

    return (
      <section className='entryForm question'>

        <div className='entryForm-block'>
          <EntryDate />
          <EntryLocation />
        </div>

        <div className='entryForm-block'>
          <div className='entryForm-icon'></div>
          <div className='entryForm-form'>
            <h4 className='entryForm-label'>Write about something you remember from today.</h4>
            <input className='entryForm-textInput textInput' placeholder='Write a quick thought here...' defaultValue={entry && entry.value ? entry.value : ''} />
          </div>
        </div>

        <div className='entryForm-block'>
          <div className='entryForm-icon'> </div>
          <EntryMood />
        </div>
      </section>
    );
  }
}

EntryForm.propTypes = {

  entry: PropTypes.shape({
    id: PropTypes.number.isRequired
  })
};

export default EntryForm;
