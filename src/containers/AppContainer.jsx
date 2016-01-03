import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { addEntry } from 'ducks/entries';

/**
 * Import components
 */
import Header from 'components/Header.jsx';
import Menu from 'components/Menu.jsx';
import Button from 'components/Button.jsx';

class AppContainer extends Component {

  render() {

    const { dispatch, routing, children, history, displayHeaderLink } = this.props;

    return (
      <div>
        <Header onLinkClick={history.goBack.bind(this)} displayHeaderLink={displayHeaderLink} />
        <main className='main'>
          {children}
        </main>
        <Menu />
      </div>
    );
  }
}

AppContainer.propTypes = {};

const routingSelector = createSelector(

  state => {
    return state.routing
  },
  state => {
    return state.app.displayHeaderLink
  },
  (routing, displayHeaderLink) => {

    return {
      routing,
      displayHeaderLink
    }
  }
);

export default connect(routingSelector)(AppContainer);
