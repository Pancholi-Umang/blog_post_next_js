import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCartdata, removeCartItem } from "../../action";
import axios from "axios";
import Link from "next/link";

const cart = ({ data }) => {
  const router = useRouter();
  const UserCart = useSelector((state) => state?.item?.usercart);
  const User = useSelector((state) => state?.item?.user);
  const [buttonQuantity, setButtonQuantity] = useState(1);

  useEffect(() => {
    User?.name == undefined ? router.push("/") : console.log("logged in");
  }, [User]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartdata(User?.id));
  }, []);

  const removeItemOnCart = (id) => {
    dispatch(removeCartItem(id, User?.id));
  };

  function Increment(id, qty) {
    setButtonQuantity(qty);
    if (buttonQuantity < 99) {
      axios.patch(`http://localhost:5000/cart/${id}`, {
        item_quantity: qty,
      });
    } else {
      setButtonQuantity(Number(99));
    }
    dispatch(getCartdata(User?.id));
  }

  function Decrement(id, qty) {
    setButtonQuantity(qty);
    if (buttonQuantity > 1) {
      axios.patch(`http://localhost:5000/cart/${id}`, {
        item_quantity: qty,
      });
    } else {
      setButtonQuantity(Number(1));
    }
    dispatch(getCartdata(User?.id));
  }

  useEffect(() => {
    let numbers = [1, 2, 3];
    let sum = numbers.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });
  }, [buttonQuantity]);

  let cartTotal = 0;
  let prices = 0;
  let total = [];

  return (
    <>
      <section className="vh-100">
        <Container className="mt-5">
          <Row className=" d-flex justify-content-center align-items-center h-100">
            <Col>
              <p>
                <span className="h2">Shopping Cart </span>
                <span className="h4">
                  ({UserCart?.length} item in your cart)
                </span>
              </p>
              {UserCart?.map((cartValues, index) => {
                return (
                  <div className="card mb-4" key={index}>
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            src={cartValues?.item_image}
                            className="img-fluid"
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2 text-center">
                              Name
                            </p>
                            <p className="fw-normal mb-0 text-center">
                              {cartValues?.item_title}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">
                              Quantity
                            </p>
                            <p className="lead fw-normal mb-0 text-center d-flex justify-content-between">
                              <span className="myPointer text-center" onClick={() => Decrement(cartValues?.id, cartValues?.item_quantity - 1)}> - </span>
                              <p className="text-center">{cartValues?.item_quantity}</p>
                              <span className="myPointer text-center" onClick={() => Increment(cartValues?.id, cartValues?.item_quantity + 1)}> + </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2 text-center">
                              Price
                            </p>
                            <p className="lead fw-normal mb-0 text-center">
                              ₹{cartValues?.item_price}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2 text-center">
                              Total
                            </p>
                            <p className="lead fw-normal mb-0 text-center">
                              ₹
                              {cartValues?.item_quantity *
                                cartValues?.item_price}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                          <div className="text-center">
                            <p className="small text-muted mb-4 pb-2">Remove</p>
                            <button
                              className=" btn btn-outline-danger text-end"
                              onClick={() => removeItemOnCart(cartValues?.id)}
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {UserCart?.map((data) => {
                prices = Number(data.item_price * data.item_quantity);
                total.push(prices);
                cartTotal += prices;
              }, [])}
              
              <div className="card mb-5">
                <div className="card-body p-4">
                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2">
                        Order total:
                      </span>
                      <span className="lead fw-normal">₹{cartTotal}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <Link href="/" type="button" className="btn btn-light me-2">
                  Continue shopping
                </Link>
                <button type="button" className="btn btn-primary ">
                  checkout
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default cart;
