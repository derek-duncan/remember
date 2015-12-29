/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import moment from 'moment';

/**
 * Import components
 */

class EntryLabel extends Component {

  render() {

    const {icon, text} = this.props;
    let iconPath;

    if (icon === 'write') {
      iconPath = 'public/img/write-icon.png';
    }

    if (icon === 'heart') {
      iconPath = 'public/img/heart-icon.png';
    }

    if (icon === 'more') {
      iconPath = 'public/img/more-icon.png';
    }

    return (
      <div {...this.props} className='entryForm-label'>
        <img className='entryForm-label-icon' src={iconPath} />
        <h4 className='entryForm-label-text'>{text}</h4>
      </div>
    );
  }
}

EntryLabel.propTypes = {
  icon: PropTypes.oneOf(['write', 'heart', 'more']),
  text: PropTypes.string.isRequired
};

export default EntryLabel;
