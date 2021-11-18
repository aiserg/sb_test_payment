import React, { Component } from 'react';

import './input.scss';

class Input extends Component {
  constructor(params) {
    super(params);

    this.state = {
      showLabel: false,
    }
  }

  renderLabel = () => {
    if (!this.props.value && !this.state.showLabel) return null;

    return (
      <div className='label'>
        {this.props.label}
      </div>
    )
  }

  renderErrorMessage = () => {
    if (!this.props.error) return null;

    return (
      <div className='error-text'>
        {this.props.error}
      </div>
    )
  }

  render() {
    const { error } = this.props;
    const inputStyle = !error ? 'input-field' : 'input-field__error';

    return (
      <div className='input-inner-container'>
        <input
          className={ inputStyle }
          type={this.props.type}
          value={this.props.value || ''}
          placeholder={!this.state.showLabel ? this.props.label : ''}
          onChange={(event) => { this.props.onChange(event.target.value)}}
          onFocus={() => { this.setState({showLabel: true}) }}
          onBlur={() => { this.setState({showLabel: false}) }}
        />
        { this.renderLabel() }
        { this.renderErrorMessage() }
        { this.props.children }
      </div>
    )
  }
}

export default Input;
