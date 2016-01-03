/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { getCurrentTimestamp, getFormattedDate } from 'utils/timeUtils';

/**
 * Import components
 */

class EntryFormDate extends Component {

  render() {

    let date = this.props.timestamp ? this.props.timestamp : getCurrentTimestamp();
    let formattedDate = getFormattedDate(date);

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
