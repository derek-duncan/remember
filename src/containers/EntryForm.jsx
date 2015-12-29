/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addEntry, updateEntry } from 'ducks/entries';

/**
 * Import components
 */
import EntryDate from 'components/EntryDate.jsx';
import EntryLocation from 'components/EntryLocation.jsx';
import EntryMood from 'components/EntryMood.jsx';
import EntryLabel from 'components/EntryLabel.jsx';

class EntryForm extends Component {

  componentDidMount() {

    const { id, dispatch } = this.props;
    let entry = {
      id: id
    };
    dispatch(addEntry(entry));
  }

  handleChange(data) {

    const { id, dispatch } = this.props;
    let entry = {
      id: id,
      text: data.text
    };
    dispatch(updateEntry(entry));
  }

  render() {

    const { entry } = this.props;

    return (
      <section className='entryForm question'>

        <div className='entryForm-block'>
          <EntryLabel icon='write' text='How did work go today?' />
          <div className='entryForm-form'>
            <textarea onChange={e => this.handleChange({ text: e.target.value })} className='entryForm-textInput textInput' placeholder='Write your thoughts here...' defaultValue={entry && entry.value ? entry.value : ''}></textarea>
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

  id: PropTypes.number.isRequired
};

EntryForm.defaultProps = {

  id: 1
};

export default connect()(EntryForm);
