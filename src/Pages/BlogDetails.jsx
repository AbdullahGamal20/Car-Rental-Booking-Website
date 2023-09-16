import React , {useEffect} from 'react'
import {Container , Row , Col , Form , FormGroup } from "react-bootstrap"
import {useParams , Link} from "react-router-dom"
import Data from "../data/db"
import Helmet from "../components/Helmet/Helmet"
import ava1 from "../assets/ava-1.jpg"
import ava2 from "../assets/ava-2.jpg"
import ava3 from "../assets/ava-3.jpg"
import "../components/styles/blog-details.css"

const blogData = Data.blogs;

function BlogDetails() {
  const {slug} = useParams();
  const blog = blogData.find(blog=> blog.title===slug);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[blog])

  return (
  
    <Helmet title= {blog.title} > 

    <section>
      <Container>
        <Row>
          <Col lg='8' md='8'>
            <div className="blog__details">
              <img src={blog.imgUrl} alt="Image" className='w-100' />
              <h2 className="section__title mt-4">{blog.title}</h2>

              <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                <span className='blog__author '>
                  <i className="ri-user-line"></i>{blog.author}
                </span>

                <span className='d-flex align-items-center gap-1 section__description '>
                  <i className="ri-calendar-line"></i>{blog.date}
                </span>

                <span className='d-flex align-items-center gap-1 section__description'>
                  <i className="ri-time-line"></i>{blog.time}
                </span>
              </div>

              <p className="section__description">{blog.description}</p>
              <h6 className='ps-5 fw-normal'>
                <blockquote className='fs-4'>{blog.quote}</blockquote>
              </h6>
              <p className="section__description">{blog.description}</p>
          
            </div>

            
            <div className="comment__list">
              <h4 className="mb-4">3 Comments</h4>

              <div className="single__comment d-flex gap-3">
                <img src={ava1} alt="Image" />
                <div className="comment__content">

                  <h6 className='fw-bold'>Abdo Tarek</h6>
                  <p className="section__description mb-0">14 July, 2022 </p>
                  <p className="section__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum explicabo fugit fuga, 
                    quis excepturi aperiam debitis nemo deserunt iure a!
                  </p>
                  
                  <span className="reply d-flex align-items-center gap-1">
                    <i className="ri-reply-line"></i> Reply
                  </span>

                </div>
              </div>

              <div className="single__comment d-flex gap-3 mt-5">
                <img src={ava2} alt="Image" />
                <div className="comment__content">

                  <h6 className='fw-bold'>Alexa </h6>
                  <p className="section__description mb-0">14 July, 2022 </p>
                  <p className="section__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum explicabo fugit fuga, 
                    quis excepturi aperiam debitis nemo deserunt iure a!
                  </p>
                  
                  <span className="reply d-flex align-items-center gap-1">
                    <i className="ri-reply-line"></i> Reply
                  </span>
                  
                </div>
              </div>


              <div className="single__comment d-flex gap-3 mt-5">
                <img src={ava3} alt="Image" />
                <div className="comment__content">

                  <h6 className='fw-bold'>Ahmed Sameh </h6>
                  <p className="section__description mb-0">14 July, 2022 </p>
                  <p className="section__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum explicabo fugit fuga, 
                    quis excepturi aperiam debitis nemo deserunt iure a!
                  </p>
                  
                  <span className="reply d-flex align-items-center gap-1">
                    <i className="ri-reply-line"></i> Reply
                  </span>
                  
                </div>
              </div>
              
              <div className="leave__comment__form mt-5">
                <h4 className="">Leave a Comment </h4>
                <p className="section__description text-capitalize">you must sign-in to make a comment or post</p>
                
                <Form>
                  <FormGroup className='d-flex gap-3 '>
                    <input className='form-control' type="text" placeholder='Full Name' />
                    <input className='form-control' type="email" placeholder='Email ' />
                  </FormGroup>

                  <FormGroup>
                    <textarea  rows="5" className='w-100 py-2 mt-3 form-control' placeholder='...comment'> </textarea>
                  </FormGroup>

                  <button className='btn comment__btn mt-3'>Post a Comment</button>
                </Form>
              </div>
              
              
            </div>
          </Col>

          <Col lg='4' md='4'>
            <div className='recent__post mb-4'>
              <h5 className='fw-bold'>Recent Posts </h5>
              {
                blogData.map((item)=>{
                  return(

                    <div className="recent__blog__post mb-4" key={item.id}>
                      <div className="recent__blog__item d-flex gap-3">
                        <img src={item.imgUrl} alt="Image" className='w-25 rounded-2' />
                        <h6><Link to ={`/blogs/${item.title}`} >{item.title}</Link></h6>
                      </div>
                    </div>

                  )
                })
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default BlogDetails