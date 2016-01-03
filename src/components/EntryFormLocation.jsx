/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';

/**
 * Import components
 */

class EntryFormLocation extends Component {

  render() {

    return (
      <div className='entryForm-location' {...this.props}>
        Tulsa, Oklahoma
      </div>
    );
  }
}

EntryFormLocation.propTypes = {};

export default EntryFormLocation;
