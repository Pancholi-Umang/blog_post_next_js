import React from "react";
import Container from "react-bootstrap/Container";
import styles from "../../styles/Home.module.css";
import Subscribeform from "../components/subscribeform";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const home = () => {
  return (
    <Container fluid className="p-0">
      <Head>
      <title>Home</title>
    </Head>
      <Row
        className={`${styles.Addbackground} d-flex align-items-center justify-content-center`}
      >
        <Subscribeform />
      </Row>
      <p className="my-5 text-center">LATEST BLOG POSTS</p>
      <Container>
        <Row className={`${styles.belowCardsRow} mb-5`}>
          <Col lg={4} md={6} sm={12}>
            <Card className={`bg-transparent ${styles.WholeCard}`}>
              <img
                className={`${styles.card_img_top} card-img-top px-3`}
                src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-02.jpg"
                layout="responsive"
              />
              <Card.Body className={`${styles.setText}`}>
                <Link className={`${styles.Linktag}`} href="components/food">
                  FOOD
                </Link>
                <Card.Title>
                  <h6>Spaghetti Sauce With Ground Beef</h6>
                </Card.Title>
                <Card.Text className={`${styles.cardInnerText}`}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className={`bg-transparent ${styles.WholeCard}`}>
              <img
                className={`${styles.card_img_top} card-img-top px-3`}
                src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-08.jpg"
                layout="responsive"
              />
              <Card.Body className={`${styles.setText}`}>
                <Link className={`${styles.Linktag}`} href="components/drink">
                  DRINK
                </Link>
                <Card.Title>
                  <h6>25 Sophisticated Drinks To Get You Feeling Fancy</h6>
                </Card.Title>
                <Card.Text className={`${styles.cardInnerText}`}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className={`bg-transparent ${styles.WholeCard}`}>
              <img
                className={`${styles.card_img_top} card-img-top px-3`}
                src="https://websitedemos.net/food-drinks-blog-04/wp-content/uploads/sites/896/2021/06/blog-02.jpg"
                layout="responsive"
              />
              <Card.Body className={`${styles.setText}`}>
                <Link className={`${styles.Linktag}`} href="components/drink">
                  DRINK
                </Link>
                <Card.Title>
                  <h6>20 Easy Vodka Drinks With 4 Ingredients Or Less</h6>
                </Card.Title>
                <Card.Text className={`${styles.cardInnerText}`}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default home;
