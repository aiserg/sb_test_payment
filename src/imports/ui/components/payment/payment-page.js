import React, { Component } from 'react';
import Header from '../app-header'
import Product from './product';
import SubscriptionForm from './subscription-form';
import './payment-page.scss';


class PaymentPage extends Component {

  render() {
    return (
      <div className='payment'>
        <Header />
        <div className='content'>
          <Product />
          <div className='content__subscription-form'>
            <SubscriptionForm />
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentPage;
