const defaultState = {
  firstName: {
    value: 'Fil',
  },
  lastName: {
    value: '',
    error: 'This field is required',
  },
  showBilling: false,
  showValidationErrors: false,
  useCredit: true,
}

const payment = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_EMAIL_ADDRESS':
      return {
        ...state,
        emailAddress: {
          value: action.emailAddress.value,
          error: action.emailAddress.error,
        }
      }
    case 'CHANGE_PASSWORD':
      return {
        ...state,
        password: {
          value: action.password.value,
          error: action.password.error,
        }
      }
    case 'CHANGE_FIRST_NAME':
      return {
        ...state,
        firstName: {
          value: action.firstName.value,
          error: action.firstName.error,
        }
      }
    case 'CHANGE_LAST_NAME':
      return {
        ...state,
        lastName: {
          value: action.lastName.value,
          error: action.lastName.error,
        }
      }
    case 'CHANGE_STREET_ADDRESS':
      return {
        ...state,
        streetAddress: {
          value: action.streetAddress.value,
          error: action.streetAddress.error,
        }
      } 
    case 'CHANGE_APT_SUITE':
      return {
        ...state,
        aptSuite: {
          value: action.aptSuite.value,
          error: action.aptSuite.error,
        }
      }
    case 'CHANGE_ZIP_CODE':
      return {
        ...state,
        zipCode: {
          value: action.zipCode.value,
          error: action.zipCode.error,
        }
      }
    case 'CHANGE_BILLING_ZIP_CODE':
      return {
        ...state,
        billingZipCode: {
          value: action.billingZipCode.value,
          error: action.billingZipCode.error,
        }
      }
    case 'CHANGE_BILLING_ADDRESS':
      return {
        ...state,
        billingAddress: {
          value: action.billingAddress.value,
          error: action.billingAddress.error,
        }
      } 
    case 'CHANGE_BILLING_APT_SUITE':
      return {
        ...state,
        billingAptSuite: {
          value: action.billingAptSuite.value,
          error: action.billingAptSuite.error,
        }
      }  
    case 'CHANGE_PHONE_NUMBER':
      return {
        ...state,
        phoneNumber: {
          value: action.phoneNumber.value,
          error: action.phoneNumber.error,
        }
      }
    case 'CHANGE_CARD_NUMBER':
      return {
        ...state,
        cardNumber: {
          value: action.cardNumber.value,
          error: action.cardNumber.error,
        }
      }
    case 'CHANGE_NAME_ON_CARD':
      return {
        ...state,
        nameOnCard: {
          value: action.nameOnCard.value,
          error: action.nameOnCard.error,
        }
      }  
    case 'CHANGE_SECURITY_CODE':
      return {
        ...state,
        securityCode: {
          value: action.securityCode.value,
          error: action.securityCode.error,
        }
      }
    case 'BILLING_FIELDS':
      return {
        ...state,
        showBilling: action.showBilling
      }
    case 'CREDIT':
      return {
        ...state,
        useCredit: action.useCredit
      } 
    case 'TOGGLE_BUY':
      return {
        ...state,
        showValidationErrors: true
      }
    default:
      return state
  }
}

export default payment
