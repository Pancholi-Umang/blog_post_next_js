import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/food.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postCartdata } from "../../../action";

export const getServerSideProps = async (req) => {
  const { food } = req.query;
  const response = await fetch(`http://localhost:5000/food/${food}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const FoodDynamic = ({ data }) => {
  
  const User = useSelector((state) => state?.item?.user);
  const dispatch = useDispatch();

  const addIntoCart = () => {
    dispatch(postCartdata({
        item_id: data?.id,
        item_image: data?.image,
        item_price: data?.price,
        item_title: data?.title,
        item_text: data?.text,
        item_quantity: data?.quantity,
        user_id: User?.id
      }))
  }

  return (
    <Container className="p-5 my-3">
      <Row className="d-flex align-items-center justify-content-center flex-column bg-white py-5">
        <Col lg={10} sm={12}>
          <div className="my-2" style={{ cursor: "pointer" }} >
            <div className="text-d-none">
              <h3 className={`mt-3 ${styles.changeH3Color}`}> {data?.title} </h3>
              <Image className="my-3" src={data?.image} alt="foodImage" height={20} width={20} layout="responsive"/>
              <p className={styles.ChangeColorbelowH3}>{data?.text}</p>
              <p className={styles.ChangeColorbelowH3}>{data?.price}₹</p>
            </div>
            <button onClick={addIntoCart} className={styles.buttonaddcart}>ADD CART</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodDynamic;
