/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { addEntry, updateEntry } from 'ducks/entries';
import { getCurrentTimestamp } from 'utils/timeUtils';
import shortid from 'shortid';

/**
 * Import components
 */
import EntryFormDate from 'components/EntryFormDate.jsx';
import EntryFormLocation from 'components/EntryFormLocation.jsx';
import EntryFormMood from 'components/EntryFormMood.jsx';
import EntryFormLabel from 'components/EntryFormLabel.jsx';
import EntryFormTextarea from 'components/EntryFormTextarea.jsx';

class EntryFormContainer extends Component {

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
          <EntryFormLabel icon='write' text='How did work go today?' />
          <EntryFormTextarea onTextareaChange={e => this.handleChange({ text: e.target.value })} value={entry && entry.text ? entry.text : ''} />
        </div>

        <div className='entryForm-block'>
          <EntryFormLabel icon='heart' text='Emotions.' />
          <EntryFormMood onMoodClick={this.handleChange.bind(this)} selected={entry && entry.mood ? Number(entry.mood) : 1} />
        </div>

        <div className='entryForm-block'>
          <EntryFormLabel icon='more' text='More.' />
          <EntryFormDate timestamp={entry ? entry.timestamp : null} />
          <EntryFormLocation />
        </div>
      </section>
    );
  }
}

EntryFormContainer.propTypes = {

  id: PropTypes.string.isRequired,
  entry: PropTypes.object
};

EntryFormContainer.defaultProps = {
  id: shortid()
};

const entrySelector = createSelector(

  state => {
    return state.entries;
  },
  entries => {
    return {
      entry: _.findWhere(entries, { timestamp: getCurrentTimestamp() })
    }
  }
);

export default connect(entrySelector)(EntryFormContainer);
