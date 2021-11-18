export const changeEmailAddress = emailAddress => ({
  type: 'CHANGE_EMAIL_ADDRESS',
  emailAddress
})

export const changePassword = password => ({
  type: 'CHANGE_PASSWORD',
  password
})

export const changeFirstName = firstName => ({
  type: 'CHANGE_FIRST_NAME',
  firstName
})

export const changeLastName = lastName => ({
  type: 'CHANGE_LAST_NAME',
  lastName
})

export const changeStreetAddress = streetAddress => ({
  type: 'CHANGE_STREET_ADDRESS',
  streetAddress
})

export const changeAptSuite = aptSuite => ({
  type: 'CHANGE_APT_SUITE',
  aptSuite
})

export const changeZipCode = zipCode => ({
  type: 'CHANGE_ZIP_CODE',
  zipCode
})

export const changeBillingAddress = billingAddress => ({
  type: 'CHANGE_BILLING_ADDRESS',
  billingAddress
})

export const changeBillingAptSuite = billingAptSuite => ({
  type: 'CHANGE_BILLING_APT_SUITE',
  billingAptSuite
})

export const changeBillingZipCode = billingZipCode => ({
  type: 'CHANGE_BILLING_ZIP_CODE',
  billingZipCode
})

export const changePhoneNumber = phoneNumber => ({
  type: 'CHANGE_PHONE_NUMBER',
  phoneNumber
})

export const changeSecurityCode = securityCode => ({
  type: 'CHANGE_SECURITY_CODE',
  securityCode
})

export const changeCardNumber = cardNumber => ({
  type: 'CHANGE_CARD_NUMBER',
  cardNumber
})

export const changeNameOnCard = nameOnCard => ({
  type: 'CHANGE_NAME_ON_CARD',
  nameOnCard
})

export const toggleCredit = useCredit => ({
  type: 'CREDIT',
  useCredit
})

export const toggleBillingFields = showBilling => ({
  type: 'BILLING_FIELDS',
  showBilling
})

export const toggleBuyButton = () => ({
  type: 'BUY'
})

export const toggleBackButton = () => ({
  type: 'BACK',
})
