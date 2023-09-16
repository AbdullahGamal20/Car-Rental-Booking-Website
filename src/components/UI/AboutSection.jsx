import React from 'react'
import {Container , Row , Col} from "react-bootstrap"
import "../styles/about-section.css"
import AboutImage from "../../assets/bmw-offer.ecfb9ac1.png"

function AboutSection({aboutClass}) {
  return (
    <section className='about__section' style={aboutClass === 'aboutPage' ? {marginTop:'0px'} :{marginTop:'280 px'} }>
      <Container>
        <Row>

          <Col lg='6' md='6'>
            <div className="about__section__content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className='section__title text-capitalize'>Welcome to car rent Service</h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dicta ipsa sint veritatis. Officia placeat iure sit numquam sequi q
                ui deleniti et esse dolor ducimus. Voluptatibus quia accusamus, 
                aspernatur eaque tempore 
                quas recusandae molestias ipsum id, assumenda sed, quod atque dolor.
              </p>

              <div className="about__section__item d-flex align-items-center ">
                
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div className="about__section__item d-flex align-items-center ">

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                </p>

              </div>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="about__img">
              <img src={AboutImage} alt="Image" className='w-100' />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default AboutSection