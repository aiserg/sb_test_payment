import React, { Component } from 'react';
import './delivery-info.scss';
import Delivery from '../../../../images/delivery.png';


class DeliveryInfo extends Component {

  render() {
    const description = `You will receive an email confirmation when recipient accepts your gift. 
      Scentbird ships between the 15th and the 18th of every month. 
      Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.`

    return (
      <div className='delivery-info'>
        <img className='delivery-info__image' src={Delivery} alt='delivery-info'/>
        <div className='delivery-info__description'>
          {description}
        </div>
      </div>
    )
  }
}

export default DeliveryInfo;
