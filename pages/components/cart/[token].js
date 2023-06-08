import React, { use, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCartdata } from "../../../action";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

// this is a cart page

const cart = () => {
  const [buttonQuantity, setButtonQuantity] = useState(1);
  const User = useSelector((state) => state?.item?.login);
  const loggerdata = useSelector((state) => state?.item?.usercart);
  const [UserCart, setUserCart] = useState([]);
  const router = useRouter();
  const { token } = router.query;


  const getData = () => {
    axios?.get(`http://192.168.29.229:5000/cart/?user_id=${token}`)
      .then((res) => setUserCart(res?.data));
  };

  useEffect(() => {
    getData();
  }, [token]);

  const dispatch = useDispatch();

  const removeItemOnCart = (id) => {
    axios?.delete(`http://192.168.29.229:5000/cart/${id}`).then((res) => {
      dispatch(getCartdata(User));
      getData();
      toast("Product Removed");
    });
  };

  function Increment(id, qty) {
    setButtonQuantity((prevQty) => {
      const newQty = qty + 1;
      if (newQty <= 99) {
        axios.patch(`http://192.168.29.229:5000/cart/${id}`, {
          item_quantity: newQty,
        });
        return newQty;
      } else {
        return prevQty;
      }
    });
    dispatch(getCartdata(User));
    getData();
  }
  let [change, setChange] = useState([]);

  useEffect(() => {
    UserCart?.map((data) => {
      setChange((prev) => [...prev, {
        item_id: data?.item_id, item_image: data?.item_image, item_price: data?.item_price,
        item_quantity: data?.item_quantity, item_text: data?.item_text, item_title: data?.item_title, user_id: User
      }])
    })
  }, [UserCart])

  function Decrement(id, qty) {
    setButtonQuantity((prevQty) => {
      const newQty = qty - 1;
      if (newQty >= 1) {
        axios.patch(`http://192.168.29.229:5000/cart/${id}`, {
          item_quantity: newQty,
        });
        return newQty;
      } else {
        return prevQty;
      }
    });
    dispatch(getCartdata(User));
    getData();
  }

  const [coupon, setCoupon] = useState("");
  const [coupanPrice, setCouponPrice] = useState(0);
  let cartTotal = 0;
  let prices = 0;
  let total = [];

  const logindata = loggerdata.map((val) => val?.id);
  const tokendata = UserCart?.map((val) => val?.id);


  useEffect(() => {
    if (tokendata?.length !== 0) {
      removeUser(logindata, tokendata)
    }
  }, [change?.length !== 0])

  const removeUser = async (logindata, tokendata) => {
    console.log(change)
    console.log(logindata, tokendata) 
    if (token != undefined && User != undefined) {
      if (token != User) {
       if (logindata?.length != 0) {
        await Promise.all(
          loggerdata.map(async (datas) => {
            await axios.delete(`http://192.168.29.229:5000/cart/${datas?.id}`);
          })
        );
        }
          change?.map((val) => {
            axios?.post(`http://192.168.29.229:5000/cart`, val)
              .then((res) => {
                console.log(res?.data);
              })
          }); 
        }
    }
  }

  const handleApplyCoupon = () => {
    if (coupon === "save10") {
      let minus = (cartTotal * 10) / 100;
      setCouponPrice(cartTotal - minus);
    }
    else if (coupon === "save30") {
      let minus = (cartTotal * 30) / 100;
      setCouponPrice(cartTotal - minus);
    }
    else {
      setCouponPrice(cartTotal);
    }
  }

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
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
                              {User == token ? (
                                <span
                                  className="myPointer text-center user-select-none"
                                  onClick={() =>
                                    Decrement(
                                      cartValues?.id,
                                      cartValues?.item_quantity
                                    )
                                  }
                                > -
                                </span>
                              ) : (
                                <span className="myPointer text-center user-select-none">

                                  -
                                </span>
                              )}

                              <input
                                type="number"
                                style={{ width: "40px" }}
                                className="text-center"
                                value={cartValues?.item_quantity}
                                disabled
                              />
                              {User == token ? (
                                <span className="myPointer text-center user-select-none"
                                  onClick={() => Increment(cartValues?.id, cartValues?.item_quantity)} > + </span>)
                                : <span className="myPointer text-center user-select-none"> + </span>
                              }
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
                            {User == token ? (
                              <button className=" btn btn-outline-danger text-end" onClick={() => removeItemOnCart(cartValues?.id)}>REMOVE</button>
                            ) : (
                              <button className=" btn btn-outline-danger text-end"> REMOVE </button>
                            )}
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
                      <span className="lead fw-normal">₹{coupanPrice == 0 ? cartTotal : coupanPrice}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <input type="text" className="ps-2 border-0 me-2 bg-light inputTaggged rounded" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter Coupon..." />
                <button onClick={() => handleApplyCoupon()} className="btn btn-light mx-2 ">Apply Coupon</button>
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
      <ToastContainer />
    </>
  );
};

export default cart;
