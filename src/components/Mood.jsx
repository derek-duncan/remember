/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';

/**
 * Import components
 */

class Mood extends Component {

  render() {

    const {id, label, isChecked} = this.props;

    return (
      <div className='mood'>
        <input className='mood-input' id={'mood-' + id} type='radio' name='mood' value='{id}' defaultChecked={isChecked ? 'checked' : ''} />
        <label className='mood-label' htmlFor={'mood-' + id}>
          <span className='mood-label-target'></span>
          <span className='mood-label-text'>{label}</span>
        </label>
      </div>
    );
  }
}

Mood.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool
};

Mood.defaultProps = {

  isChecked: false
};

export default Mood;
