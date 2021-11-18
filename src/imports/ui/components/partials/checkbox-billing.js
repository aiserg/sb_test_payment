import React from 'react';
import './checkbox-billing.scss';
import { connect } from 'react-redux'
import { toggleBillingFields } from '../../../store/actions/index'

const CheckboxBilling = ({ dispatch }) => {
  return (
    <div>
      <label className='checkbox-billing-container'>
        <input
          type='checkbox'
          onChange={(event) => {dispatch(toggleBillingFields(event.target.checked))}}
        />
        <span className='checkbox-billing-checkmark'></span>
      </label>
    </div>
  )
}

export default connect()(CheckboxBilling);
