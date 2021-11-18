import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './partials/input';
import Validations from '../helpers/validations'
import { changeEmailAddress, changePassword } from '../../store/actions/index';
import './payment/subscription-form.scss';


class CreateAccount extends Component {

  handleEmailAddressChange = (value) => {
    const error = Validations.checkEmail(value);
    this.props.dispatch(changeEmailAddress({value, error}));
  }

  handlePasswordChange = (value) => {
    const error = Validations.checkPassword(value);
    this.props.dispatch(changePassword({value, error}));
  }

  render() {
    const { payment } = this.props;
    const { emailAddress, password } = payment;
    const title = 'Create account';

    return (
      <div className='create-account'>
        <div className='create-account__title'>
          {title}
        </div>
        <div className='create-account__fields'>
          <div className='input-container'>
            <Input
              label={'Email address'}
              type={'email'}
              value={emailAddress && emailAddress.value}
              error={emailAddress && emailAddress.error}
              onChange={this.handleEmailAddressChange}
            />
          </div>
          <div className='input-container'>
            <Input
              label={'Password'}
              type={'password'}
              value={password && password.value}
              error={password && password.error}
              onChange={this.handlePasswordChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    payment: state.payment,
  })
}

export default connect(mapStateToProps)(CreateAccount);
