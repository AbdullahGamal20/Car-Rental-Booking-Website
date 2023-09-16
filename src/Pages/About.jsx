import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import AboutSection from '../components/UI/AboutSection';
import { Container , Row , Col } from 'react-bootstrap'
import driveImg from "../assets/drive.jpg"
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import OurMember from '../components/UI/OurMember';
import "../components/styles/about.css"

function About() {
  return (
    <Helmet title='About' >
      <CommonSection title='About Us' />
      <AboutSection  aboutClass="aboutPage" />

      <section className='about__page__section'>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12'>
              <div className="about__page__img">
                <img src={driveImg} alt="Image"  className='w-100 rounded-3' />
              </div>
            </Col>

            <Col lg='6' md='6' sm='12'>
              <div className="about__page__content">
                <h2 className="section__title text-capitalize" >
                  we are committed to provide safe ride solutions 
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa suscipit corrupti quaerat ratione, facilis officia temporibus quia, asperiores vero velit harum distinctio 
                  iusto modi illum reprehenderit! Sit, repellendus quis.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa suscipit corrupti quaerat ratione, facilis officia temporibus quia, asperiores vero velit harum distinctio 
                  iusto modi illum reprehenderit! Sit, repellendus quis.
                </p>

                <div className='d-flex align-items-center gap-3 mt-4'>
                  <span className='fs-4'><i className="ri-phone-line"></i></span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help</h6>
                    <h4>+20 01123347691</h4>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <BecomeDriverSection />


      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMember />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About;