import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {

  render() {

    return (
      <nav className='menu'>
        <Link to='/new' className='menu-item' activeClassName='isActive'>New</Link>
        <Link to='/archive' className='menu-item' activeClassName='isActive'>Archive</Link>
        <a className='menu-item' href=''>Settings</a>
      </nav>
    );
  }
}
