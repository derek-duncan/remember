import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { addEntry } from 'actions/actions.js';

/**
 * Import components
 */
import Header from 'components/Header.jsx';
import Menu from 'components/Menu.jsx';
import Button from 'components/Button.jsx';

class App extends Component {

  render() {

    const { dispatch, routing, children } = this.props;

    return (
      <div>
        <Header />
        <main className='main'>
          {children}
        </main>
        <Menu />
      </div>
    );
  }
}

App.propTypes = {};

const routingSelector = createSelector(

  state => {
    console.log(state);
    return state.routing
  },
  routing => {

    return {
      routing
    }
  }
);

export default connect(routingSelector)(App);
