import React from 'react'
import {Container , Row , Col , ListGroup , ListGroupItem} from "react-bootstrap"
import { Link } from 'react-router-dom'
import "../styles/footer.css"

const quickLinks = [
  {
    path:"/about",
    display:'About'
  },

  {
    path:"/#",
    display:'Privacy Policy '
  },

  {
    path:"/cars",
    display:'Car Listing'
  },

  {
    path:"/blogs",
    display:'Blog'
  },

  {
    path:"/contact",
    display:'Contact'
  },


]

function Footer() {
  const date  = new Date();
  const year = date.getFullYear();


  return (
    <footer className='footer'>
      <Container>
        <Row>

          <Col lg='4' md='4' sm='12'>
            <div className="logo footer__logo">
              <h1>
                <Link to={"/home"} className='d-flex align-items-center gap-3'>
                  <i className="ri-car-line"></i> <span>Rent Car <br /> Service </span>
                </Link>
              </h1>
            </div>

            <p className="footer__logo__content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              ipsa fugit. Aut, sed quis. Iusto Unde, 
              neque voluptatum exercitationem in vel animi hic 
              voluptates voluptatem <br /> fuga labore quaerat asperiores 
              delectus!nulla
            </p>
          </Col>

          <Col lg='2' md='4' sm='6'>
            <div className="mb-4">
              <h5 className="footer__link__title text-light">Quick Links</h5>
              <ListGroup>
                {
                  quickLinks.map((item , index)=>{
                    return(
                      <ListGroupItem key={index}  className='p-0 mt-3 quick__link'>
                        <Link to={item.path}>{item.display}</Link>
                      </ListGroupItem>
                    )
                  })
                }
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6' >
            <div className="mb-4">
              <h5 className="footer__link__title mb-4 text-light ">Head Office</h5>
              <p className='office__info'>17 Maadi ,Cairo , Egypt</p>
              <p className='office__info'>Phone: +20 011-2334-7691</p>
              <p className='office__info'>Email: abdallhagamal17@gmail.com</p>
              <p className='office__info'>Office Time: 10am-8pm</p>

            </div>
          </Col>

          <Col lg='3' md='4' sm='12' className=''>
            <div className="mb-4">
              <h5 className='footer__link__title text-light'>Newsletter</h5>
              <p className="section__description">
                Subscribe Our Newsletter 
              </p>
              <div className="newsletter">
                <input type="email" placeholder='Email'  />
                <span><i className="ri-send-plane-line"></i></span>
              </div>
            </div>
          </Col>

          <Col lg='12' >
            <div className="footer__bottom">
              <p className="section__description pt-4 d-flex justify-content-center align-items-center gap-1">
                <i className="ri-copyright-line"></i>
                Copyright {year}, Developed By Abdullah Gamal, All right reserved   
              </p>
            </div>
          </Col>
          
        </Row>
      </Container>
    </footer>
  )
}

export default Footer