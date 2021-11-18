import React, { Component } from 'react';
import Perfume from '../../../../images/free-perfume-product.png';
import CheckboxCredit from '../partials/checkbox-credit';
import DeliveryInfo from './delivery-info';
import OfferInfo from './offer-info';
import SubscriptionType from './subscription-type';
import SubscriptionForm from './subscription-form';
import { connect } from 'react-redux';
import './product.scss';


class Product extends Component {

  renderOfferInfo() {
    const title = 'MONTHLY SUBSCRIPTION';
    return(
      <div className='offer-product'>
        <OfferInfo title={ title } />
      </div>
    )
  }

  renderSubscriptionType() {
    return(
      <div className='product__subscription-type'>
        <SubscriptionType/>
      </div>
    )
  }

  renderProductImage = () => {
    return (
       <div className='product__image'>
        <img
          className='product__image__inner'
          src={ Perfume }
          alt='perfume'  
        />
      </div>
    )
  }

  renderPrice = () => {
    return (
      <div>
        <div className='product__price'>
          { this.renderMonthlyPrice() }
          { this.renderShippingPrice() }
          { this.renderTaxPrice() }
          { this.renderDiscountPrice() }
          { this.renderCreditBalance() }
        </div>
        <div className='product__total'>
          { this.renderTotalPrice() }
          { this.renderCoupon() }
          { this.renderSubscriptionType() }
        </div>
        <div className='product__fields'>
          <SubscriptionForm />
        </div>
      </div>
    )
  }

  renderMonthlyPrice = () => {
    const monthlyLabel = '$14.95';
    return (
      <div className='product__price-description'>
        <div>Monthly subscription</div>
        <div>{ monthlyLabel }</div>
      </div>
    )
  }

  renderShippingPrice = () => {
    const shippingLabel = 'FREE';
    return (
      <div className='product__price-description'>
        <div>Shipping</div>
        <div>{ shippingLabel }</div>
      </div>
    )
  }

  renderTaxPrice = () => {
    const taxLabel = '$2.35';
    return (
      <div className='product__price-description'>
        <div>Tax</div>
        <div>{ taxLabel }</div>
      </div>
    )
  }

  renderDiscountPrice = () => {
    const discountLabel = '-$5';
    return (
      <div className='product__price-description'>
        <div>Discount</div>
        <div className='product__price-description__pink'>{ discountLabel }</div>
      </div>
    )
  }

  renderCreditBalance = () => {
    const creditLabel = '$50';
    return (
      <div className='product__price-description'>
        <div>Credit (Balance $100)</div>
        <div className='product__price-description__credit'>
          <div className='product__price-description__credit-label'>
            { creditLabel }
          </div>
          <CheckboxCredit
            checked={this.props.payment.useCredit}
          />
        </div>
      </div>
    )
  }

  renderTotalPrice = () => {
    const totalLabel = '$25.00';
    return (
      <div className='product__price-total'>
        <div>TOTAL</div>
        <div>{ totalLabel }</div>
      </div>
    )
  }

  renderCoupon = () => {
    return (
      <div className='product__price__coupon'>
        <div>Have a <span className='product__price__coupon-offer'>coupon code</span>?</div>
      </div>
    )
  }
  

  render() {
    return (
      <div className='product'>
        { this.renderOfferInfo() }
        <div className='price'>
          { this.renderProductImage() }
          { this.renderPrice() }
        </div>
        <DeliveryInfo />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    payment: state.payment,
  })
}

export default connect(mapStateToProps)(Product);
