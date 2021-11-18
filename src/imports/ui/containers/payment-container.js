import React, { Component } from 'react';
import PaymentPage from '../components/payment/payment-page';
import { connect } from 'react-redux'


class PaymentContainer extends Component {

  render() {
    return (
      <PaymentPage />
    );
  }
}

export default connect()(PaymentContainer);
