/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { addEntry } from 'actions/actions.js';

/**
 * Import components
 */

class Entry extends Component {

  render() {

    const { dispatch, entry } = this.props;

    return (
      <section className='entry question'>
        <h4 className='question-label'>What do you remember about your day?</h4>
        <input className='question-textInput textInput' placeholder='Write a quick thought here...' defaultValue={entry.value || ''} />
      </section>
    );
  }
}

Entry.propTypes = {

  entry: PropTypes.shape({
    id: PropTypes.number
  }).isRequired
};

export default Entry;
