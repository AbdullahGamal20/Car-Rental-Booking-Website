import React from 'react'
import "../styles/become-driver.css"
import { Container , Row , Col } from 'react-bootstrap'
import driverImage from "../../assets/toyota-offer-2.png"


function BecomeDriverSection() {
  return (
    <section className='become_driver'>
      <Container>
        <Row>

          <Col lg='6' md='6' sm='12' className='become__driver__img'>
            <img src={driverImage} alt="Driver Image" className='w-100' />
          </Col>

          <Col lg='6' md='6' sm='12'>
            <h2 className="section__title become__driver__title text-capitalize">
              Do You Want to earn with us ? so don't be late 
            </h2>

            <button className="btn become__driver__btn" >Become a Driver</button>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default BecomeDriverSection