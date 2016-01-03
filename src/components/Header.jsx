import React, { Component, PropTypes } from 'react';

export default class Header extends Component {

  render() {

    const { displayHeaderLink } = this.props;

    let buttonStyle = {
      display: displayHeaderLink ? 'block' : 'none'
    };

    return (
      <header className='header'>
        <span className='header-link' onClick={this.props.onLinkClick} style={buttonStyle}>Go back</span>
        <img className='header-logo' src='public/img/logo-color.svg' width='30' height='30' />
      </header>
    );
  }
}
