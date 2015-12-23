import React, { Component, PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { addEntry } from 'actions/actions.js';

/**
 * Import components
 */
import Header from 'components/Header.jsx';
import Button from 'components/Button.jsx';

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
      <main>
        <Header />
        <Button onButtonClick={e => dispatch(addEntry())}>
          Add Entry
        </Button>
        <ul>{list}</ul>
      </main>
    );
  }
}

App.propTypes = {

  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired
};

const entriesSelector = createSelector(

  state => {
    return state.entries
  },
  entries => {

    return {
      entries: entries.items
    };
  }
);

export default connect(entriesSelector)(App);
