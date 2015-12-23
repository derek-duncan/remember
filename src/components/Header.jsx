import React, { Component, PropTypes } from 'react';

export default class Header extends Component {

  render() {

    return (
      <header className='header'>
        <img className='header-logo' src='public/img/logo-color.svg' width='30' height='30' />
      </header>
    );
  }
}
