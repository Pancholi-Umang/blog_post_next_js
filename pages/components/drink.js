import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/food.module.css";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Drink = () => {

  const [drink, setDrinks] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3000/api/drink";

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setDrinks(response?.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);


  return (
    <Container className="ps-5 pe-5">
      <Row className={`d-flex align-items-center justify-content-center flex-column mt-5 ${styles.colorOfHeader}`}>
        <Col lg={10} sm={12}> <h3 className="ps-3">Drinks</h3> <hr /> </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center flex-column">
        <Col lg={10} sm={12}>
          {
            drink?.map((foodValue) => {
              return (
                <div key={foodValue?.id} className="my-2">
                  <Link href="/" key={foodValue?.id} className="text-d-none">
                    <Image src={foodValue?.image} alt="foodImage" height={20} width={20} layout="responsive" />
                    <h3 className={`mt-3 ${styles.changeH3Color}`}>{foodValue?.title}</h3>
                    <p className={styles.ChangeColorbelowH3}>{foodValue?.text}</p>
                  </Link>
                  <hr className="mb-4" />
                </div>
              )
            })
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Drink;
