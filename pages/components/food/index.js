import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/food.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";
import { wrapper } from "../../../store";
import * as types from "../../../actionTypes";
import axios from "axios";


export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  try {
    let { data } = await axios.get("http://localhost:5000/food");
    let productdata = await store.dispatch({
      type: types?.FETCH_ALL_FOOD,
      payload: data,
    })
    return { props: { productdata } };
  } catch (error) {
    return console.log(error,"error in indexjs of food");
  }
});

const Index = () => {
  const fetchFood = useSelector(state=>state?.item?.food)
  const router = useRouter();

  return (
    <Container className="ps-5 pe-5">
      <Head>
        <title>Food</title>
      </Head>
      <Row
        className={`d-flex align-items-center justify-content-center flex-column mt-5 ${styles.colorOfHeader}`}
      >
        
        <Col lg={10} sm={12}>
          <h3 className="ps-3">Food</h3> <hr />
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center flex-column">
        <Col lg={10} sm={12} className="d-flex justify-content-center flex-column align-items-center">
          {fetchFood?.map((foodValue) => {
            return (
              <div
                key={foodValue?.id}
                onClick={() => router.push(`food/${foodValue?.id}`)}
                className="my-2"
                style={{ cursor: "pointer" }}
              >
                <div key={foodValue?.id} className="text-d-none">
                  <img
                    src={foodValue?.image}
                    alt="foodImage"
                    className="img-fluid"
                  />
                  <h3 className={`mt-3 ${styles.changeH3Color}`}>
                    {foodValue?.title}
                  </h3>
                  <p className={styles.ChangeColorbelowH3}>{foodValue?.text}</p>
                </div>
                <hr className="mb-4" />
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
