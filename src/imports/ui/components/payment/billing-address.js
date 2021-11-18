import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../partials/input';
import Validations from '../../helpers/validations'
import { changeBillingAddress, changeBillingAptSuite, changeBillingZipCode } from '../../../store/actions'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { get} from 'lodash';
import './subscription-form.scss';

const PrimaryIconColor = '#ff458f';


class BillingAddress extends Component {

  renderBillingAddressFields = () => {
    const { payment } = this.props;
    const { billingAddress, billingAptSuite } = payment;
    
    return (
      <div className='shipping-address__fields'>
        <div className='input-container' style={{flex: '2 1 2.5%'}}>
          <Input
            label={'Street address'}
            type={'text'}
            value={billingAddress && billingAddress.value}
            error={billingAddress && billingAddress.error}
            onChange={this.handleBillingAddressChange}
          />
        </div>
        <div className='input-container' style={{flex: 1}}>
          <Input
            label={'Apt/Suite (Optional)'}
            type={'text'}
            value={billingAptSuite && billingAptSuite.value}
            error={billingAptSuite && billingAptSuite.error}
            onChange={this.handleBillingAptSuiteChange}
          />
        </div>
      </div>
    )
  }

  renderDoneIcon = () => {
    const value = get(this.props.payment, 'billingZipCode.value');
    const error = get(this.props.payment, 'billingZipCode.error');
    if (error || !value) return null;
    const doneSymbol = '';

    return (
      <span className='shipping-address__zip-code__done'>{doneSymbol}</span>
    )
  }

  renderZipCodeInput = () => {
    const { payment } = this.props;
    const { billingZipCode } = payment;

    return (
      <div className='custom-select-field'>
        <div className='shipping-address__zip-code'>
          <Input
            label={'Zip code'}
            type={'number'}
            value={billingZipCode && billingZipCode.value}
            error={billingZipCode && billingZipCode.error}
            onChange={this.handleBillingZipCodeChange}
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

  handleBillingAddressChange = (value) => {
    const error = Validations.checkFieldNotEmpty(value);
    this.props.dispatch(changeBillingAddress({value, error}));
  }

  handleBillingAptSuiteChange = (value) => {
    const error = Validations.checkFieldLength(value);
    this.props.dispatch(changeBillingAptSuite({value, error}));
  }

  handleBillingZipCodeChange = (value) => {
    const error = Validations.checkZipCode(value);
    this.props.dispatch(changeBillingZipCode({value, error}));
  }

  render() {
    const { payment } = this.props;
    if (!payment.showBilling) return null;
    const title = 'Billing address';

    return (
      <div className='billing-address'>
        <div className='shipping-address__title'>
          {title}
        </div>
        { this.renderBillingAddressFields() }
        <div className='shipping-address__fields'>
          { this.renderZipCodeInput() }
          { this.renderCitiesList() }
          { this.renderStatesList() }
        </div>
        <div className='shipping-address__fields'>
          { this.renderCountriesList() }
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

export default connect(mapStateToProps)(BillingAddress);
