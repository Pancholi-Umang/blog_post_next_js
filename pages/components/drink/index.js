import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/food.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrink } from "../../../action";
import Head from "next/head";

export const getStaticProps = async () => {
  const data = await fetch("http://localhost:5000/drink").then((res) =>
    res.json()
  );
  return {
    props: {
      data,
    },
  };
};

const Index = ({ data }) => {
  const fetchDrink = useSelector(state=>state.item.drink)
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(getAllDrink(data));
  }, []);

  return (
    <Container className="ps-5 pe-5">
       <Head>
        <title>Drink</title>
      </Head>
      <Row
        className={`d-flex align-items-center justify-content-center flex-column mt-5 ${styles.colorOfHeader}`}
      >
        <Col lg={10} sm={12}>
          <h3 className="ps-3">Drinks</h3> <hr />
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center flex-column">
        <Col lg={10} sm={12} className="d-flex justify-content-center flex-column align-items-center">
          {fetchDrink?.map((drinkValue) => {
            return (
              <div
                key={drinkValue?.id}
                onClick={() => router.push(`drink/${drinkValue?.id}`)}
                className="my-2"
                style={{ cursor: "pointer" }}
              >
                <div key={drinkValue?.id} className="text-d-none">
                  <img
                    src={drinkValue?.image}
                    alt="drinkImage"
                    className="img-fluid"
                  />
                  <h3 className={`mt-3 ${styles.changeH3Color}`}>
                    {drinkValue?.title}
                  </h3>
                  <p className={styles.ChangeColorbelowH3}>{drinkValue?.text}</p>
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
