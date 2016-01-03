/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { getFormattedDate } from 'utils/timeUtils';
import _ from 'lodash';

/**
 * Import components
 */
import { Link } from 'react-router';

class EntryItem extends Component {

  render() {

    const { id, timestamp, text, mood } = this.props;

    let date = getFormattedDate(timestamp);
    let shortendText = _.trunc(text, 60, '...');

    return (
      <div className='entryItem'>
        <span className='entryItem-date'>{date}</span>
        <p className='entryItem-text'>{shortendText || 'No entry created.'}</p>
        <Link to={'/entry/' + id} className='entryItem-link'>Read entry</Link>
      </div>
    );
  }
}

EntryItem.defaultProps = {
  timestamp: new Date(),
  text: '',
  mood: 1
}

EntryItem.propTypes = {
  timestamp: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  mood: PropTypes.string.isRequired
};

export default EntryItem;
