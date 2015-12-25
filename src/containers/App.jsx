import React, { Component, PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { addEntry } from 'actions/actions.js';

/**
 * Import components
 */
import Header from 'components/Header.jsx';
import Button from 'components/Button.jsx';
import Entry from 'containers/Entry.jsx';

class App extends Component {

  render() {

    const { dispatch, entries } = this.props;
    let list = entries.map(entry => {

      return (
        <Entry entry={entry} key={entry.id} />
      );
    });

    return (
      <main>
        <Header />
        <Button onButtonClick={e => dispatch(addEntry())}>
          Add Entry
        </Button>
        {list}
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
      entries: entries
    };
  }
);

export default connect(entriesSelector)(App);
