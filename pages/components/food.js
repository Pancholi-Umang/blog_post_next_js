import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
  
const Food = () => {
  return (
    <Container>
      <Row className={`d-flex align-items-center justify-content-center flex-column mt-5 ${styles.colorOfHeader}`}>
        <Col lg={10}> <h3 className="ps-3">Food</h3> <hr /> </Col>
      </Row>
    </Container>
  );
};

export default Food;
