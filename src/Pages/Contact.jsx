import React from 'react'
import { Container , Row , Col , Form , FormGroup } from 'react-bootstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Link } from 'react-router-dom'
import "../components/styles/contact.css"

const socialLinks =[
  {
    url:"#",
    icon:"ri-facebook-line"
  },
  {
    url:"#",
    icon:"ri-instagram-line"
  },
  {
    url:"#",
    icon:"ri-linkedin-line"
  },
  {
    url:"#",
    icon:"ri-twitter-line"
  },  
] 

function Contact() {
  return (
    <Helmet title='Contact'>
      <CommonSection title={"Contact Us"}/>

      <section>
        <Container>
          <Row>
            <Col lg='7' md='7' >
              <h6 className="fw-bold">Get in Touch</h6>

              <Form>
                <FormGroup className='Contact__form'>
                  <input className='form-control' type='text' placeholder='Your Name'/>
                </FormGroup>

                <FormGroup className='Contact__form mt-3'>
                  <input className='form-control' type='email' placeholder='Email'/>
                </FormGroup>

                <FormGroup className='Contact__form mt-3'>
                  <textarea className='form-control' placeholder='Message' rows={5}></textarea>
                </FormGroup>

                <button className='btn contact__btn mt-3' type='submit'>Send Message</button>
              </Form>
            </Col>

            <Col lg=' 5' md='5'>
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description">17 Maadi, Cairo, Egypt</p>

                <div className='d-flex align-items-center gap-2'>
                  <h6 className="mb-0 fs-6">phone: </h6>
                  <p className="section__description mb-0">+20 01123347691</p>
                </div>

                <div className='d-flex align-items-center gap-2'>
                  <h6 className="mb-0 fs-6">Email: </h6>
                  <p className="section__description mb-0">abdallhagamal17@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className='d-flex align-items-center gap-4 mt-3'>
                  {
                    socialLinks.map((link , index)=>{
                      return(
                        <Link className='social__links__icon' to={link.url} key={index}><i className={link.icon}></i></Link>
                      )
                    })
                  }
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Contact