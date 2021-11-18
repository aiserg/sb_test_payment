import { get } from 'lodash';
const DefaultErrorText = 'This field is required';

const Validations = {

  checkFieldLength(value) {
    const minFormLength = 3;
    return get(value, 'length') < minFormLength && DefaultErrorText;
  },

  checkFieldNotEmpty(value) {
    const fieldLength = get(value, 'length');
    return !fieldLength && DefaultErrorText;
  },

  checkEmail(value) {
    const errorText = 'That is not a valid email address';
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
    const isEmail = re.test(value);
    return !isEmail && errorText
  },

  checkPassword(value) {
    const minPassLength = 10;
    const errorText = 'Password must be at least 10 characters';
    return get(value, 'length') <= minPassLength && errorText;
  },

  checkZipCode(value) {
    const errorText = 'Zip code is not valid';
    const re = /^\d{5}(?:[-\s]\d{4})?$/;
    const isValidZipCode = re.test(value);
    return !isValidZipCode && errorText
  },

  checkPhoneNumber(value) {
    const re = /^(\+1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/; // eslint-disable-line
    const errorText = 'Phone is not valid';
    const fieldLength = get(value, 'length');
    const isValidUSPhoneNumber = re.test(value);
    return fieldLength && !isValidUSPhoneNumber && errorText;
  },

  checkCreditCardNumber(value) {
    const errorText = 'Card number is not valid';
    const re = /^[0-9]{16}$/;
    const isValidCardNumber = re.test(value);
    return !isValidCardNumber && errorText
  },

  checkSecurityCode(value) {
    const securityCodeLength = 3;
    const testNumber = '111';
    const errorText = 'Security code is not valid';
    const isTabooNumber = value === testNumber;
    const isValidLength = get(value, 'length') !== securityCodeLength;
    return (isValidLength || isTabooNumber) && errorText
  }
  
};


export default Validations;
