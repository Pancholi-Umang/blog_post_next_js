import React from "react";
import styles from "../../styles/Home.module.css";
import { Button, Col } from "react-bootstrap";

const Subscribeform = () => {
  return (
    <Col lg={6} md={10} xs={10}>
      <form
        className={` ${styles.formProperty} d-flex align-items-center justify-content-center flex-column`}
      >
        <h6 className={` ${styles.font_color_h5}`}>
          FOOD, DRINK & RESTORENTS REVIEWS
        </h6>
        <h1>Join our List Todays!</h1>
        <input
          type="email"
          placeholder="Enter email..."
          className={`${styles.text_box}`}
        />
        <Button className={`${styles.buttonSubs}`}>SUBSCRIBE NOW</Button>
      </form>
    </Col>
  );
};

export default Subscribeform;
