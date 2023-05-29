import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from "../../styles/Home.module.css";

const About = () => {
  return (
    <Container fluid className='p-0'>
      <Row className={`${styles.AddbackImages} p-0`}>
        <Col md={12}>
          <Container>
            <p className='text-md-start text-center'>ABOUT ME</p>
            <h3 className='text-md-start text-center'>
              Hello, I’m Umang Pancholi, a Food and Drinks blogger from India. I have started blogging in 2023 lorem ipsum dolor sit amet.</h3>
          </Container>
        </Col>
      </Row>
      <Container className='mt-3'>
        <Row>
          <Col md={6} sm={12}>
            <h5 className={`${styles.font_color_h6}`}>I visit different hotels, restaurants, street food places to taste their Food / Drinks.</h5>
          </Col>
          <Col md={6} sm={12}>
            <div>
              <h6 className={`${styles.font_color_h6}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</h6>
              <p className={`${styles.p}`}>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className={`${styles.p}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About