/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import moment from 'moment';

/**
 * Import components
 */

class EntryDate extends Component {

  render() {

    let date = moment().date();

    return (
      <div {...this.props} className='entryForm-date entryForm-icon'>
        <span className='entryForm-date-number'>
          {date}
          <sup>th</sup>
        </span>
        <span className='entryForm-date-label'>Today</span>
      </div>
    );
  }
}

EntryDate.propTypes = {};

export default EntryDate;
