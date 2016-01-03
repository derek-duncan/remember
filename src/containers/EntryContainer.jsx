/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

/**
 * Import components
 */

class EntryContainer extends Component {

  render() {

    const { entry } = this.props;

    return (
      <section className='entry'>
        <h4>{entry.timestamp}</h4>
        <div>{entry.text}</div>
      </section>
    );
  }
}

EntryContainer.propTypes = {};

const entrySelector = createSelector(

  state => {

    const { entries } = state;
    return entries;
  },
  (state, props) => {

    const { params } = props;
    return params.entryId;
  },
  (entries, id) => {

    return {
      entry: entries[id]
    };
  }
);

export default connect(entrySelector)(EntryContainer);
