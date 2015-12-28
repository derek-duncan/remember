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
      <div {...this.props} className='entryForm-date'>
        <span className='entryForm-date-day'>Wednesday, </span>
        <span className='entryForm-date-number'>
          {date}
          <sup>th</sup>
        </span>
      </div>
    );
  }
}

EntryDate.propTypes = {};

export default EntryDate;
