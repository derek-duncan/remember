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
        Location
      </div>
    );
  }
}

EntryLocation.propTypes = {};

export default EntryLocation;
