/**
 * Import dependencies
 */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Import components
 */

class EntryFormTextarea extends Component {

  constructor() {
    super();

    this.state = {
      isFocused: false
    };
  }

  handleFocus() {

    this.setState({
      isFocused: true
    });
  }

  handleBlur() {

    this.setState({
      isFocused: false
    });
  }

  render() {

    const { onTextareaChange, value } = this.props;
    const { isFocused } = this.state;

    let formClasses = classnames({
      'entryForm-form': true,
      'entryForm-form--overlay': !isFocused
    });

    return (
      <div className={formClasses}>
        <textarea className='entryForm-textInput textInput' onChange={onTextareaChange} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} placeholder='Write your thoughts here...' defaultValue={value}></textarea>
      </div>
    );
  }
}

EntryFormTextarea.propTypes = {
  onTextareaChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default EntryFormTextarea;
