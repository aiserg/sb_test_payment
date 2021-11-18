import React from 'react';
import './checkbox-credit.scss';
import { connect } from 'react-redux'
import { toggleCredit } from '../../../store/actions/index'


const CheckboxCredit = ({ checked, dispatch  }) => {

  return (
    <div>
      <label className='checkbox-credit-container'>
        <input
          type='checkbox'
          checked={checked}
          onChange={(event) => {dispatch(toggleCredit(event.target.checked))}}
        />
        <span className='checkbox-credit-checkmark'></span>
      </label>
    </div>
  )
}

export default connect()(CheckboxCredit);
