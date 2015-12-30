/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
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
      id: id
    };

    if (data.text) {
      entry.text = data.text;
    }

    if (data.mood) {
      entry.mood = data.mood;
    }

    dispatch(updateEntry(entry));
  }

  render() {

    const { entry } = this.props;

    return (
      <section className='entryForm question'>

        <div className='entryForm-block'>
          <EntryLabel icon='write' text='How did work go today?' />
          <div className='entryForm-form'>
            <textarea className='entryForm-textInput textInput' onChange={e => this.handleChange({ text: e.target.value })} placeholder='Write your thoughts here...' defaultValue={entry && entry.text ? entry.text : ''}></textarea>
          </div>
        </div>

        <div className='entryForm-block'>
          <EntryLabel icon='heart' text='How does the day feel?' />
          <EntryMood onMoodClick={this.handleChange.bind(this)} selected={entry && entry.mood ? Number(entry.mood) : 1} />
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

  id: PropTypes.number.isRequired,
  entry: PropTypes.object
};

EntryForm.defaultProps = {

  id: 1
};

const entrySelector = createSelector(

  state => {
    return state.entries;
  },
  (state, props) => {
    return props.id;
  },
  (entries, id) => {

    let tmpId = 1;
    return {
      id: tmpId,
      entry: entries[tmpId]
    }
  }
);

export default connect(entrySelector)(EntryForm);
