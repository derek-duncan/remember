/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';

/**
 * Import components
 */

class EntryLocation extends Component {

  render() {

    return (
      <div className='entryForm-location' {...this.props}>
        Tulsa, Oklahoma
      </div>
    );
  }
}

EntryLocation.propTypes = {};

export default EntryLocation;
