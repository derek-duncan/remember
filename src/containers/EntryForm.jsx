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
          <div className='entryForm-form'>
            <div className='entryForm-label'>
              <img className='entryForm-label-icon' src='public/img/write-icon.png' />
              <h4 className='entryForm-label-text'>How did work go today?</h4>
            </div>
            <textarea className='entryForm-textInput textInput' placeholder='Write your thoughts here...' defaultValue={entry && entry.value ? entry.value : ''}></textarea>
          </div>
        </div>

        <div className='entryForm-block'>
          <div className='entryForm-label'>
            <img className='entryForm-label-icon' src='public/img/heart-icon.png' />
            <h4 className='entryForm-label-text'>How does the day feel?</h4>
          </div>
          <EntryMood />
        </div>

        <div className='entryForm-block'>
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
