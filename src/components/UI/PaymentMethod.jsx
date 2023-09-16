import React from 'react'
import masterCard from "../../assets/master-card.jpg"
import paypl from "../../assets/paypal.jpg"
import "../styles/payment-method.css"

function PaymentMethod() {
  return (

    <>
      <div className='payment '>
        <label className='d-flex align-items-center gap-2' >
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className='payment mt-3'>
        <label className='d-flex align-items-center gap-2' >
          <input type="radio" /> Cheque Payment
        </label>
      </div>

      <div className='payment mt-3 d-flex align-items-center justify-content-between'>
        <label className='d-flex align-items-center gap-2' >
          <input type="radio" /> Master Card
        </label>

        <img src={masterCard} alt="Image" />
      </div>
      

      <div className='payment mt-3 d-flex align-items-center justify-content-between'>
        <label className='d-flex align-items-center gap-2' >
          <input type="radio" /> Paypal
        </label>

        <img src={paypl} alt="Image" />
      </div>

      <div className='payment text-end mt-5'>
        <button className=' '>Reverse Now</button>
      </div>
    </>
  
  )
}

export default PaymentMethod