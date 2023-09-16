import React from 'react'
import "../styles/services-list.css"
import { Col } from 'react-bootstrap'
import Data from  "../../data/db"
const  servicesData =  Data.services;


function ServicesList() {
  
  return (
    <>
    {
      servicesData.map((item)=>{
        return(
          <ServiceItem item={item}  key={item.id} />
        )
      })
    }
    </>
  )
}

const ServiceItem = ({item})=>{
  let desc = item.description.slice(0,120)
  return(
    <Col lg='4' md='4' sm='6' className='mb-3 main'>
      <div className="service__item " >
        <span className='mb-3 d-inline-block'>
          <i className={item.icon} />
        </span>

        <h6>{item.title}</h6>
        <p className="section__description">{desc}</p>
      </div>
    </Col>
  )
  
}


export default ServicesList