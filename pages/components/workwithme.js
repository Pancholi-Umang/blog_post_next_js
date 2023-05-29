import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const Workwithme = () => {
  return (
    <Container fluid className="p-0 ">
      <Row className={`${styles.AddbackgroundWorkWithMe}`}>
        <Col md={12} className={`d-flex align-items-center ${styles.Brighter_Elem}`}>
          <Container className="mt-5">
            <p className={` text-md-start text-center`}>Contact</p>
            <h3 className={`text-md-start text-center`}>Work With Me</h3>
          </Container>
        </Col>
      </Row>
      
      <Container className="py-5">
        <Row className="mt-5">
          <Col md={6} sm={12}>
            <h2>I would love to hear a few words about your project.</h2>
            <p className={`${styles.another}`}>Get in touch with me if you have any queries and I’ll get back to you as soon as possible.</p>
            <h5 className={`${styles.another_email}`}><span className={`${styles.border_bottom}`}>umang@gmail.com</span></h5>
          </Col>
          <Col md={6} sm={12}>
            <form style={{ height: "300px" }} className="d-flex justify-content-between flex-column">
              <Row className="px-5 pb-0">
                <Col className={`${styles.inFormColumn} p-0`} sm={12}>Name</Col>
                <Col className="d-flex align-items-center justify-content-between p-0">
                  <span className={`${styles.giveClass}`}>
                    <input className={`${styles.formInput}`} />
                    <p className={`${styles.ps}`}>First</p>
                  </span>
                  <span className={`${styles.giveClass}`}>
                    <input className={`${styles.formInput}`} />
                    <p className={`${styles.ps}`}>Last</p>
                  </span>
                </Col>
              </Row>
              <Row className="px-5">
                <Col className={`${styles.inFormColumn} p-0`} sm={12}>Email</Col>
                <Col className="p-0"><input className={`${styles.formInput}`} /></Col>
              </Row>
              <Row className="px-5">
                <Col className={`${styles.inFormColumn} p-0`} sm={12}>Message</Col>
                <Col className="p-0"><textarea className={`${styles.TextAreaInput}`} /></Col>
              </Row>
              <Row className="px-5">
                <button className={`${styles.buttonSubmit}`}>SUBMIT</button>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

    </Container>
  );
};

export default Workwithme;
