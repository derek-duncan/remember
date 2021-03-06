/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

/**
 * Import components
 */
import EntryItem from 'components/EntryItem.jsx';
import { Link } from 'react-router';

class ArchiveContainer extends Component {

  render() {

    const { archives } = this.props;
    const list = archives.map(entry => {
      return <EntryItem key={entry.id} id={entry.id} timestamp={entry.timestamp} text={entry.text} mood={entry.mood} />;
    });
    const emptyState = <span>No entries. <Link to='/new'>Add one for today</Link></span>;

    return (
      <section className='archive'>

        <h4 className='archive-title'>Archives</h4>
        { list.length ? list : emptyState }
      </section>
    );
  }
}

ArchiveContainer.propTypes = {};

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

export default connect(archiveSelector)(ArchiveContainer);
