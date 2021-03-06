/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getFormattedDate } from 'utils/timeUtils';
import { showHeaderLink, hideHeaderLink } from 'ducks/app';

/**
 * Import components
 */

class EntryContainer extends Component {

  componentDidMount() {

    const { dispatch } = this.props;
    dispatch(showHeaderLink());
  }

  componentWillUnmount() {

    const { dispatch } = this.props;
    dispatch(hideHeaderLink());
  }

  render() {

    const { entry } = this.props;

    let date = getFormattedDate(entry.timestamp);

    return (
      <section className='entry'>
        <span className='entry-date'>{date}</span>
        <div className='entry-text'>{entry.text}</div>
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
