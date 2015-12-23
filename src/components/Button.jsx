import React, { Component, PropTypes } from 'react';

export default class Button extends Component {

  render() {

    const { onButtonClick, children, ...other } = this.props;

    return (
      <button className='button' onClick={onButtonClick} {...other}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {

  onButtonClick: PropTypes.func.isRequired
}
