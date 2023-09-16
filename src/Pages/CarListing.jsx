import React from 'react'
import {Container , Row ,Col} from "react-bootstrap"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import Data from "../data/db"
import CarItem from '../components/UI/CarItem'

const carData = Data.cars;

function CarListing() {
  return (
    <Helmet title ="Cars">
      <CommonSection title ="Car Listing " />
      

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className='d-flex align-items-center gap-2'><i className="ri-sort-asc"></i>Sort By</span>
                <select >
                  <option >Select</option>
                  <option value={"Low"} >Low to High</option>
                  <option value={"high"} > High to Low</option>
                </select>
              </div>
            </Col>
            {
              carData.map(item=> <CarItem item={item} key={item.id} />)
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CarListing