/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

/**
 * Import components
 */

class Archive extends Component {

  render() {

    const { archives } = this.props;
    const list = archives.map(entry => {
      return (
        <p key={entry.id}>
          <b>{entry.id}: </b>
          <span>{entry.text || 'No details added.'}</span>
          <br />

          <b>Mood: </b>
          <span>{entry.mood || 'No mood added.'}</span>
        </p>
      );
    });

    return (
      <section className='archive'>

        <h3>archives</h3>
        {list}
      </section>
    );
  }
}

Archive.propTypes = {};

const archiveSelector = createSelector(

  state => {

    const { archives, entries } = state;
    return {
      archives,
      entries
    }
  },
  state => {

    return {
      archives: state.archives.map(id => state.entries[id])
    };
  }
);

export default connect(archiveSelector)(Archive);
