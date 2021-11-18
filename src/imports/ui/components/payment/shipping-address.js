import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../partials/input';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Validations from '../../helpers/validations'
import { changeFirstName, changeLastName, changeStreetAddress  } from '../../../store/actions'
import { changeAptSuite, changePhoneNumber, changeZipCode } from '../../../store/actions'
import { get } from 'lodash';
import './subscription-form.scss';

const PrimaryIconColor = '#ff458f';


class ShippingAddress extends Component {

  renderDoneIcon = () => {
    const value = get(this.props.payment, 'zipCode.value');
    const error = get(this.props.payment, 'zipCode.error');
    if (error || !value) return null;
    const doneSymbol = '';

    return (
      <span className='shipping-address__zip-code__done'>{doneSymbol}</span>
    )
  }

  renderZipCodeInput = () => {
    const { payment } = this.props;
    const { zipCode } = payment;

    return (
      <div className='custom-select-field'>
        <div className='shipping-address__zip-code'>
          <Input
            label={'Zip code'}
            type={'number'}
            value={zipCode && zipCode.value}
            error={zipCode && zipCode.error}
            onChange={this.handleZipCodeChange}
          >
            { this.renderDoneIcon() } 
          </Input>
        </div>
      </div>
    )
  }

  renderCitiesList = () => {
    return (
      <div className='custom-select-field'>
        <select className='custom-select-field__select'>
          <option>City</option>
          <option selected>NEW YORK</option>
        </select>
        <div className='custom-select-field__arrow'>
          <ArrowDropDown nativeColor={PrimaryIconColor} />
        </div>
      </div>
    )
  }

  renderStatesList = () => {
    return (
      <div className='custom-select-field'>
        <select className='custom-select-field__select'>
          <option>State</option>
          <option selected>NEW YORK</option>
        </select>
        <div className='custom-select-field__arrow'>
          <ArrowDropDown nativeColor={PrimaryIconColor} />
        </div>
      </div>
    )
  }

  renderCountriesList = () => {
    return (
      <div className='custom-select-field'>
        <select className='custom-select-field__select'>
          <option>Country</option>
          <option selected>UNITED STATES</option>
        </select>
      </div>
    )
  }

  handleFirstNameChange = (value) => {
    const error = Validations.checkFieldLength(value);
    this.props.dispatch(changeFirstName({value, error}));
  }

  handleLastNameChange = (value) => {
    const error = Validations.checkFieldLength(value);
    this.props.dispatch(changeLastName({value, error}));
  }

  handleStreetAddressChange = (value) => {
    const error = Validations.checkFieldNotEmpty(value);
    this.props.dispatch(changeStreetAddress({value, error}));
  }

  handleAptSuiteChange = (value) => {
    this.props.dispatch(changeAptSuite({value}));
  }

  handlePhoneNumberChange = (value) => {
    const error = Validations.checkPhoneNumber(value);
    this.props.dispatch(changePhoneNumber({value, error}));
  }

  handleZipCodeChange = (value) => {
    const error = Validations.checkZipCode(value);
    this.props.dispatch(changeZipCode({value, error}));
  }

  renderShippingAddressFields = () => {
    const { payment } = this.props;
    const { firstName, lastName } = payment;
    
    return(
      <div className='shipping-address__fields'>
        <div className='input-container'>
          <Input
            label={'First name'}
            type={'text'}
            value={firstName && firstName.value}
            error={firstName && firstName.error}
            onChange={this.handleFirstNameChange}
          />
        </div>
        <div className='input-container'>
          <Input
            label={'Last name'}
            type={'text'}
            value={lastName && lastName.value}
            error={lastName && lastName.error}
            onChange={this.handleLastNameChange}
          />
        </div>
      </div>
    )
  }

  renderStreetAddressFields = () => {
    const { payment } = this.props;
    const { streetAddress, aptSuite } = payment;

    return(
      <div className='shipping-address__fields'>
        <div className='input-container' style={{flex: '2 1 2.5%'}}>
          <Input
            label={'Street address'}
            type={'text'}
            value={streetAddress && streetAddress.value}
            error={streetAddress && streetAddress.error}
            onChange={this.handleStreetAddressChange}
          />
        </div>
        <div className='input-container' style={{flex: 1}}>
          <Input
            label={'Apt/Suite (Optional)'}
            type={'text'}
            value={aptSuite && aptSuite.value}
            error={aptSuite && aptSuite.error}
            onChange={this.handleAptSuiteChange}
          />
        </div>
      </div>
    )
  }

  renderPhoneFields = () => {
    const { payment } = this.props;
    const { phoneNumber } = payment;
    const shippingDescriptionText = 'We may send you special discounts and offers'

    return(
      <div className='shipping-address__fields'>
        <div className='input-container'>
          <Input
            label={'Mobile number (Optional)'}
            type={'tel'}
            value={phoneNumber && phoneNumber.value}
            error={phoneNumber && phoneNumber.error}
            onChange={this.handlePhoneNumberChange}
          />
        </div>
        <div className='shipping-address__phone-description'>
          {shippingDescriptionText}
        </div>
      </div>
    )
  }

  render() {
    const title = 'Shipping address';
    
    return (
      <div className='shipping-address'>
        <div className='shipping-address__title'>
          {title}
        </div>
        { this.renderShippingAddressFields() }
        { this.renderStreetAddressFields() }
        <div className='shipping-address__fields'>
          { this.renderZipCodeInput() }
          { this.renderCitiesList() }
          { this.renderStatesList() }
        </div>
        <div className='shipping-address__fields'>
          { this.renderCountriesList() }
        </div>
        { this.renderPhoneFields() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    payment: state.payment,
  })
}

export default connect(mapStateToProps)(ShippingAddress);
