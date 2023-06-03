import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/food.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postCartdata } from "../../../action";
import Head from "next/head";
import axios from "axios";
import { wrapper } from "../../../store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    try {
      const { drink } = context.query;
      let { data } = await axios.get(`http://192.168.29.229:5000/drink/${drink}`);
      return { props: { data } };
    } catch (error) {
      return console.log(error);
    }
  }
);

const DrinkDynamic = ({ data }) => {
  const User = useSelector((state) => state?.item?.user);
  const dispatch = useDispatch();

  const addIntoCart = () => {
    dispatch(
      postCartdata({
        item_id: data?.id,
        item_image: data?.image,
        item_price: data?.price,
        item_title: data?.title,
        item_text: data?.text,
        item_quantity: data?.quantity,
        user_id: User?.id,
      })
    );
  };

  return (
    <Container className="p-5 my-5">
      <Head>
        <title>Drink</title>
      </Head>
      <Row className="d-flex align-items-center justify-content-center flex-column bg-white py-5">
        <Col className="centerClassWithColumn" lg={10} sm={12}>
          <div className="my-2 " style={{ cursor: "pointer" }}>
            <div className="text-d-none">
              <h3 className={`mt-3 ${styles.changeH3Color}`}>{data?.title}</h3>
              <img
                className="my-3 img-fluid"
                src={data?.image}
                alt="drinkImage"
              />
              <p className={styles.ChangeColorbelowH3}>{data?.text}</p>
              <p className={styles.ChangeColorbelowH3}>{data?.price}₹</p>
            </div>
            <button className={styles.buttonaddcart} onClick={addIntoCart}>
              ADD CART
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DrinkDynamic;
