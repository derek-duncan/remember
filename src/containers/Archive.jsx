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

    const { entries } = this.props;

    return (
      <section className='archive'>

        <h3>archives</h3>
      </section>
    );
  }
}

Archive.propTypes = {};

const entriesSelector = createSelector(

  state => {
    return state.entries
  },
  entries => {

    return {
      entries: entries
    };
  }
);

export default connect(entriesSelector)(Archive);
