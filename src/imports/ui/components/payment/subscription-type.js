import React, { Component } from 'react';
import Women from '../../../../images/picked.png';
import Men from '../../../../images/not-picked.png';
import './subscription-type.scss';


class SubscriptionType extends Component {

  render() {
    const title = 'Choose your subscription type';
    const error = 'Your gender is required';
    const womanLabel = 'For women';
    const manLabel = 'For men';

    return (
      <div className='subscription-type'>
        <div className='subscription-type__title'>
          {title}
        </div>
        <div className='subscription-type__images'>
          <div className='subscription-type__images__block'>
            <img className='subscription-type__images__image' src={Women} alt='women' />
            <div className='subscription-type__images__title'>{womanLabel}</div>
          </div>
          <div className='subscription-type__images__block'>
            <img className='subscription-type__images__image' src={Men} alt='men' />
            <div className='subscription-type__images__title'>{manLabel}</div>
          </div>
        </div>
        <div className='subscription-type__error'>
          {error}
        </div>
      </div>
    )
  }
}

export default SubscriptionType;
