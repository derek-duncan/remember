/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import moment from 'moment';

/**
 * Import components
 */

class EntryFormDate extends Component {

  render() {

    let displayFormat = 'D dddd, YYYY';
    let date = this.props.timestamp ? moment(this.props.timestamp, 'YYYYMMDD') : moment(new Date());
    let formattedDate = date.format(displayFormat);

    return (
      <div {...this.props} className='entryForm-date'>
        {formattedDate}
      </div>
    );
  }
}

EntryFormDate.propTypes = {
  timestamp: PropTypes.string
};

export default EntryFormDate;
