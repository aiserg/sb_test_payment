import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleBuyButton  } from '../../../store/actions/index'
import ArrowForward from '@material-ui/icons/ArrowForward';
import CheckboxBilling from '../partials/checkbox-billing';
import OfferInfo from './offer-info';
import ShippingAddress from './shipping-address';
import BillingAddress from './billing-address';
import CreateAccount from '../create-account';
import CreditCard from './credit-card';
import './subscription-form.scss';


class SubscriptionForm extends Component {

  renderOfferInfo() {
    const title = 'MONTH-TO-MONTH SUBSCRIPTION';
    return(
      <div className='offer-subscription'>
        <OfferInfo title={title} />
      </div>
    )
  }

  billingAddressSwitcher = () => {
    const billingAddressLabel = 'Use this address as my billing address';
    return (
      <div className='billing-address-switcher'>
        <CheckboxBilling />
        <div className='billing-address-switcher__label'>
          { billingAddressLabel }
        </div>
      </div>
    )
  }

  subscriptionFormButtons = () => {
    const backButtonLabel = 'Back';
    const buyButtonLabel = 'BUY NOW';

    return (
      <div className='subscription-form-buttons'>
        <div className='subscription-form-buttons__back'>
          { backButtonLabel }
        </div>
        <div
          className='subscription-form-buttons__buy'
          onClick={() => this.props.dispatch(toggleBuyButton())}
        >
          { buyButtonLabel }
          <div className='subscription-form-buttons__buy__arrow'>
            <ArrowForward nativeColor={'#ffffff'} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='fields'>
        { this.renderOfferInfo() }
        <CreateAccount />
        <div className='login-fields-plug'/>
        <ShippingAddress />
        { this.billingAddressSwitcher() }
        <BillingAddress />
        <CreditCard />
        { this.subscriptionFormButtons() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    payment: state.payment,
  })
}

export default connect(mapStateToProps)(SubscriptionForm);
