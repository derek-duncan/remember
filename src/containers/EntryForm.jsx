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
import EntryLabel from 'components/EntryLabel.jsx';

class EntryForm extends Component {

  render() {

    const { entry } = this.props;

    return (
      <section className='entryForm question'>

        <div className='entryForm-block'>
          <EntryLabel icon='write' text='How did work go today?' />
          <div className='entryForm-form'>
            <textarea className='entryForm-textInput textInput' placeholder='Write your thoughts here...' defaultValue={entry && entry.value ? entry.value : ''}></textarea>
          </div>
        </div>

        <div className='entryForm-block'>
          <EntryLabel icon='heart' text='How does the day feel?' />
          <EntryMood />
        </div>

        <div className='entryForm-block'>
          <EntryLabel icon='more' text='Add more thoughts.' />
          <EntryDate />
          <EntryLocation />
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
