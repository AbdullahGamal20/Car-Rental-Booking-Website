import React from 'react'
import "../styles/find-car-form.css"
import { Form , FormGroup } from 'react-bootstrap'

function FindCarForm() {
  return (
    <Form className='form' >
      <div className="d-flex align-items-center justify-content-between flex-wrap ">
        <FormGroup className='form__group mb-3'>
          <input type="text" placeholder='From address' required />
        </FormGroup>

        <FormGroup className='form__group mb-3'>
          <input type="text" placeholder='To address' required />
        </FormGroup>

        <FormGroup className='form__group mb-3'>
          <input type="date" placeholder='Journey date' required />
        </FormGroup>

        <FormGroup className='form__group mb-3'>
          <input className='journey__time' type="time" placeholder='Journey Time' required />
        </FormGroup>

        <FormGroup className='select__group mb-3'>
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>

          </select>
        </FormGroup>

        <FormGroup className='form__group mb-3'>
          <button className="btn find__car__btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  )
}

export default FindCarForm