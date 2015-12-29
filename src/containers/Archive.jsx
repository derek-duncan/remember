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

    const { archive } = this.props;
    const list = archive.map(entry => {
      return (
        <p key={entry.id}>
          <b>{entry.id}: </b>
          <span>{entry.text}</span>
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

    const { archive, entities } = state;
    return {
      archive,
      entities
    }
  },
  state => {

    return {
      archive: state.archive.map(id => state.entities[id])
    };
  }
);

export default connect(archiveSelector)(Archive);
