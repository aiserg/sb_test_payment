import React, { Component } from 'react';
import './offer-info.scss';


class OfferInfo extends Component {

  render() {
    const subtitle = 'Billed monthly. Renews automatically, cancel any time. Free shipping.';

    return (
      <div className='description'>
        <div className='description__title'>
          {this.props.title}
        </div>
        <div className='description__subtitle'>
          {subtitle}
        </div>
      </div>
    )
  }
}

export default OfferInfo;
