import React, { Component, PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { addEntry } from 'actions/actions.js';

class App extends Component {

  render() {
    const { dispatch, entries } = this.props;
    let list = entries.map(entry => {
      return (
        <li key={entry.id}>
          {entry.id}
        </li>
      );
    });

    return (
      <div>
        <button className='button' onClick={e => dispatch(addEntry())}>
          Add Entry
        </button>
        <ul>{list}</ul>
      </div>
    );
  }
}

App.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired
};

const entriesSelector = createSelector(
  state => state.entries,
  state => {
    return {
      entries: state.entries
    };
  }
);

export default connect(entriesSelector)(App);
