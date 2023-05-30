import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/food.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
export const getStaticProps = async () => {
  const data = await fetch("http://localhost:5000/food").then((res) =>
    res.json()
  );
  return {
    props: {
      data,
    },
  };
};

const Index = ({ data }) => {
  const router = useRouter();
  const [food, setFoods] = useState([]);
  useEffect(() => {
    setFoods(data);
  }, []);

  return (
    <Container className="ps-5 pe-5">
      <Row
        className={`d-flex align-items-center justify-content-center flex-column mt-5 ${styles.colorOfHeader}`}
      >
        <Col lg={10} sm={12}>
          <h3 className="ps-3">Food</h3> <hr />
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center flex-column">
        <Col lg={10} sm={12}>
          {food?.map((foodValue) => {
            return (
              <div
                key={foodValue?.id}
                onClick={() => router.push(`food/${foodValue?.id}`)}
                className="my-2"
                style={{ cursor: "pointer" }}
              >
                <div key={foodValue?.id} className="text-d-none">
                  <Image
                    src={foodValue?.image}
                    alt="foodImage"
                    height={20}
                    width={20}
                    layout="responsive"
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