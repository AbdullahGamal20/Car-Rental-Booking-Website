import React from 'react'
import {Container , Row , Col} from "react-bootstrap"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import BlogList from "../components/UI/BlogList"


function Blog() {
  return (
    <Helmet title='Blogs'>
      <CommonSection  title={"Blogs"} />

      <section>
        <Container>
          <Row>
            <BlogList/>
            <BlogList/>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Blog