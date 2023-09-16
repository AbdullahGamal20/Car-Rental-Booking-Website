import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/ava-1.jpg"
import ava02 from "../../assets/ava-2.jpg"
import ava03 from "../../assets/ava-3.jpg"
import ava04 from "../../assets/ava-4.jpg"

import "../styles/testimonial.css"


function Testimonial() {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} >
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus adipisci aspernatur perferendis, sunt beatae recusandae
          rerum odit qui voluptatem impedit doloribus cum
          placeat incidunt corrupti inventore ducimus natus minima itaque?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="Testimonial" className='w-25 h-25 rounded-2' />
          
          <div>
            <h6 className='mb-0 mt-3'>Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus adipisci aspernatur perferendis, sunt beatae recusandae
          rerum odit qui voluptatem impedit doloribus cum
          placeat incidunt corrupti inventore ducimus natus minima itaque?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="Testimonial" className='w-25 h-25 rounded-2' />
          
          <div>
            <h6 className='mb-0 mt-3'>Alexa</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus adipisci aspernatur perferendis, sunt beatae recusandae
          rerum odit qui voluptatem impedit doloribus cum
          placeat incidunt corrupti inventore ducimus natus minima itaque?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="Testimonial" className='w-25 h-25 rounded-2' />
          
          <div>
            <h6 className='mb-0 mt-3'>Abo Jimmy</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus adipisci aspernatur perferendis, sunt beatae recusandae
          rerum odit qui voluptatem impedit doloribus cum
          placeat incidunt corrupti inventore ducimus natus minima itaque?
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="Testimonial" className='w-25 h-25 rounded-2' />
          
          <div>
            <h6 className='mb-0 mt-3'>Diana</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

    </Slider>
  )
}

export default Testimonial