import React, { Component, PropTypes } from 'react';
import { addEntry } from 'actions/actions.js';

/**
 * Import components
 */
import Header from 'components/Header.jsx';
import Menu from 'components/Menu.jsx';
import Button from 'components/Button.jsx';

class App extends Component {

  render() {

    const { dispatch, children } = this.props;

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

export default App;
