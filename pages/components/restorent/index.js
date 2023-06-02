import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/food.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { getAllRestorent } from "../../../action";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

export const getStaticProps = async () => {
  const data = await fetch("http://localhost:5000/restorent").then((res) =>
    res.json()
  );
  return {
    props: {
      data,
    },
  };
};

const Index = ({ data }) => {
  const fetchResto = useSelector(state=>state?.item?.resto)
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRestorent(data));
  }, []);
  return (
    <Container className="ps-5 pe-5">
      <Head>
        <title>Best Restorent</title>
      </Head>
      <Row
        className={`d-flex align-items-center justify-content-center flex-column mt-5 ${styles.colorOfHeader}`}
      >
        <Col lg={10} sm={12}>
          <h3 className="ps-3">Restorents</h3> <hr />
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center flex-column">
        <Col lg={10} sm={12}>
          {fetchResto?.map((resto) => {
            return (
              <div
                key={resto?.id}
                onClick={() => router.push(`restorent/${resto?.id}`)}
                className="my-2"
                style={{ cursor: "pointer" }}
              >
                <div key={resto?.id} className="text-d-none">
                  <Image
                    src={resto?.image}
                    alt="foodImage"
                    height={20}
                    width={20}
                    layout="responsive"
                  />
                  <h3 className={`mt-3 ${styles.changeH3Color}`}>
                    
                    {resto?.title}
                  </h3>
                  <p className={styles.ChangeColorbelowH3}>{resto?.text}</p>
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
