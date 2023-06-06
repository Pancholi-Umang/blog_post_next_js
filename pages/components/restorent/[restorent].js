import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/food.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postCartdata } from "../../../action";
import Head from "next/head";
import axios from "axios";
import { wrapper } from "../../../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getcartDataUsingCheck } from "../../../action";
import Link from "next/link";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    try {
      const { restorent } = context.query;
      let { data } = await axios.get(
        `http://192.168.29.229:5000/restorent/${restorent}`
      );
      return { props: { data } };
    } catch (error) {
      return console.log(error);
    }
  }
);

const RestoDynamic = ({ data }) => {
  const user_Token_Disp = useSelector((state) => state?.item?.login);
  const checkcondition = useSelector((state) => state?.item?.check);
  const checkcart = useSelector((state) => state?.item?.usercart);
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
        user_id: user_Token_Disp,
      })
    );
    toast.success("Product Add Successfully");
  };

  const [state, setState] = useState(false);
  useEffect(() => {
    dispatch(getcartDataUsingCheck(user_Token_Disp, data?.id, data?.price));
  }, [user_Token_Disp, checkcart.length]);

  useEffect(() => {
    checkcondition?.map((val) => {
      if (val?.item_id == data?.id) {
        setState(true);
      } else {
        setState(false);
      }
    });
  }, [checkcondition]);

  return (
    <Container className="p-5 my-3">
      <Head>
        <title>Best Restorent</title>
      </Head>
      <Row className="d-flex align-items-center justify-content-center flex-column bg-white py-5">
        <Col className="centerClassWithColumn" lg={10} sm={12}>
          <div className="my-2" style={{ cursor: "pointer" }}>
            <div className="text-d-none">
              <h3 className={`mt-3 ${styles.changeH3Color}`}>
                {" "}
                {data?.title}{" "}
              </h3>
              <img
                className="my-3 img-fluid"
                src={data?.image}
                alt="restorentImage"
              />
              <p className={styles.ChangeColorbelowH3}>{data?.text}</p>
              <p className={styles.ChangeColorbelowH3}>{data?.price}₹</p>
            </div>
            {state === true ? (
              <Link
                style={{ textDecoration: "none" }}
                href={`http://192.168.29.229:3000/components/cart/${user_Token_Disp}`}
                className={styles.buttonaddcart}
              >
                VIEW CART
              </Link>
            ) : (
              <button onClick={addIntoCart} className={styles.buttonaddcart}>
                ADD CART
              </button>
            )}
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default RestoDynamic;
