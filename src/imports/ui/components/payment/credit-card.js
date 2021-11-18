import React, { Component } from 'react';
import { connect } from 'react-redux';
import './subscription-form.scss';
import './credit-card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SecureIcon from '../../../../images/secure-icon.png';
import CardsIcon from '../../../../images/icon-cc-all.png';
import Input from '../partials/input';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Validations from '../../helpers/validations';
import { changeSecurityCode, changeCardNumber, changeNameOnCard } from '../../../store/actions'


class CreditCard extends Component {

  renderCardDescription = () => {
    const subtitle = '128-BIT ENCRYPTION. YOU’RE SAFE';

    return (
      <div className='credit-card__fields__description'>
        <div className='credit-card__fields__description-left'>
          <img className='credit-card__fields__secure-image' src={SecureIcon}/>
          <div className='credit-card__fields__description-left-subtitle'>
            {subtitle}
          </div>
        </div>
        <img className='credit-card__fields__description-image' src={CardsIcon}/>
      </div>
    )
  }

  renderCardData = () => {
    const { cardNumber } = this.props.payment;

    return (
      <div className='credit-card__fields__card-number'>
        <div className='input-container' style={{flex: '3'}}>
          <Input
            label={'Credit card number'}
            type={'number'}
            value={cardNumber && cardNumber.value}
            error={cardNumber && cardNumber.error}
            onChange={this.handleCardNumberChange}
          >
            { this.renderLockIcon() }
          </Input>
        </div>
        { this.renderSecurityCode() }
      </div>
    )
  }

  renderSecurityCode = () => {
    const { securityCode } = this.props.payment;

    return(
      <div className='credit-card__fields__security-number'>
        <div className='input-container' style={{flex: '1'}}>
          <Input
            label={'Security code'}
            type={'number'}
            value={securityCode && securityCode.value}
            error={securityCode && securityCode.error}
            onChange={this.handleSecurityCodeChange}
          />
          <div className='credit-card__info'>
            <FontAwesomeIcon
              style={{paddingLeft: 15}}
              icon='question-circle'
              size='lg'
            />
          </div>
        </div>
      </div>
    )
  }

  renderNameOnCard = () => {
    const { nameOnCard } = this.props.payment;

    return(
      <div className='credit-card__fields__name-on-card'>
        <div className='input-container'>
          <Input
            label={'Name on card'}
            type={'text'}
            value={nameOnCard && nameOnCard.value}
            error={nameOnCard && nameOnCard.error}
            onChange={this.handleNameOnCardChange}
          />
        </div>
      </div>
    )
  }

  renderMonthsList = () => {
    return (
      <div className='credit-card__fields__exp'>
        <select className='custom-select-field__select'>
          <option>Month</option>
          <option selected>APRIL</option>
        </select>
        <div className='custom-select-field__arrow'>
          <ArrowDropDown nativeColor={'#d8d8d8'} />
        </div>
      </div>
    )
  }

  renderYearList = () => {
    return (
      <div className='credit-card__fields__exp'>
        <select className='custom-select-field__select'>
          <option>Year</option>
          <option selected>2020</option>
        </select>
        <div className='custom-select-field__arrow'>
          <ArrowDropDown nativeColor={'#d8d8d8'} />
        </div>
      </div>
    )
  }

  handleSecurityCodeChange = (value) => {
    const minCodeLength = 3;
    if (value.length > minCodeLength) return;
    const error = Validations.checkSecurityCode(value);
    this.props.dispatch(changeSecurityCode({value, error}));
  }

  handleCardNumberChange = (value) => {
    const error = Validations.checkCreditCardNumber(value);
    this.props.dispatch(changeCardNumber({value, error}));
  }

  handleNameOnCardChange = (value) => {
    const error = Validations.checkFieldNotEmpty(value);
    this.props.dispatch(changeNameOnCard({value, error}));
  }

  renderLockIcon = () => {
    const lockSymbol = '';
    return (
      <span className='credit-card__fields__card-secure'>{lockSymbol}</span>
    )
  }

  render() {
    const title = 'Secure credit card payment';

    return (
      <div className='credit-card'>
        <div className='credit-card__title'>
          {title}
        </div>
        <div className='credit-card__fields'>
          { this.renderCardDescription() }
          { this.renderCardData() }
          <div className='credit-card__fields__expiration'>
            { this.renderNameOnCard() }
            <div className='credit-card__fields__expiration-large'>
              { this.renderMonthsList() }
              { this.renderYearList() }
            </div>
          </div>
          <div className='credit-card__exp__mobile'>
            { this.renderMonthsList() }
            { this.renderYearList() }
          </div>
          { this.renderSecurityCode() }
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

export default connect(mapStateToProps)(CreditCard);
