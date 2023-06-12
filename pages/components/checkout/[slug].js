import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { signupSchema } from "../../../schemas/checkout";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  address: "",
  countrys: "",
  states: "",
  zip: "",
};

const Checkout = () => {
  const country = [
    { label: "INDIA", value: "ind" },
    { label: "UNITED STATE", value: "us" },
    { label: "UNITED KINGDOM", value: "uk" },
    { label: "PAKISTAN", value: "pak" },
  ];

  const state = [
    { label: "GUJRAT", value: "gj" },
    { label: "DELHI", value: "dl" },
    { label: "RAJASTAN", value: "rj" },
    { label: "MAHARASTRA", value: "mh" },
  ];
  const [userName, setUsername] = useState("");

  const { values, errors, touched, resetForm, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values)
      resetForm();
      setUsername("");
    },
  });

  const User = useSelector((state) => state?.item?.login);

  const [Checkoutdetails, setCheckoutdetails] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    axios
      .get(`http://192.168.29.229:5000/checkoutdetails/?user_id=${slug}`)
      .then((res) => {
        setCheckoutdetails(res?.data[0]);
      });
  }, [slug]);

  const [totalState, setTotalState] = useState(0);

  useEffect(() => {
    setTotalState(
      Checkoutdetails?.subtotal -
      Checkoutdetails?.minusUsingCoupon +
      Checkoutdetails?.boxSelectPrice
    );
  }, [Checkoutdetails]);


  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2> Checkout form </h2>
      </div>
      <div className={User == slug ? "row" : "d-none"}>
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Total {Checkoutdetails?.title?.length} items in Your cart</span>
          </h4>

          <ul className="list-group mb-3">
            {Checkoutdetails?.title?.map((val, ind) => {
              return (
                <span key={ind}>
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">{val}</h6>
                    </div>
                    <span className="text-muted">
                      ₹{Checkoutdetails?.price[ind]} x {Checkoutdetails?.quantity[ind]} = ₹
                      {Checkoutdetails?.price[ind] *
                        Checkoutdetails?.quantity[ind]}
                    </span>
                  </li>
                </span>
              );
            })}

            <li className="list-group-item d-flex justify-content-between">
              <span>Sub-total</span>
              <strong>₹{Checkoutdetails?.subtotal}</strong>
            </li>

            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
              </div>
              <span className="text-success">
                -₹{Checkoutdetails?.minusUsingCoupon}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-danger">
                <h6 className="my-0">delivery</h6>
              </div>
              <span className="text-danger">
                +₹{Checkoutdetails?.boxSelectPrice}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (IND)</span>
              <strong>₹{totalState}</strong>
            </li>
          </ul>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.firstname}
                  name="firstname"
                />
                <div>
                  {errors?.firstname && touched?.firstname ? (
                    <p className="form-error"> {errors?.firstname} </p>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.lastname}
                />
                <div>
                  {errors?.lastname && touched?.lastname ? (
                    <p className="form-error"> {errors?.lastname} </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                Username <span className="text-muted">(Optional)</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={userName}
                />
                <div style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email"> Email </label>
              <input
                type="email"
                className="form-control"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values?.email}
                id="email"
                name="email"
                placeholder="you@example.com"
              />
              <div>
                {errors?.email && touched?.email ? (
                  <p className="form-error"> {errors?.email} </p>
                ) : null}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="1234 Main St"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values?.address}
              />
              <div>
                {errors?.address && touched?.address ? (
                  <p className="form-error"> {errors?.address} </p>
                ) : null}
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select
                  className="custom-select d-block w-100"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.countrys}
                  id="country"
                  name="countrys"
                >
                  <option value="">please Select..</option>
                  {country.map((options) => (
                    <option key={options.value} value={options.value}>
                      {options.label}
                    </option>
                  ))}
                </select>
                <div>
                  {errors?.countrys && touched?.countrys ? (
                    <p className="form-error"> {errors?.countrys} </p>
                  ) : null}
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select
                  className="custom-select d-block w-100"
                  id="state"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.states}
                  name="states"
                >
                  <option value="">please Select..</option>
                  {state.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div>
                  {errors?.states && touched?.states ? (
                    <p className="form-error"> {errors?.states} </p>
                  ) : null}
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  name="zip"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.zip}
                />
                <div>
                  {errors?.zip && touched?.zip ? (
                    <p className="form-error"> {errors?.zip} </p>
                  ) : null}
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-block" type="submit">
              Payment
            </button>
          </form>
        </div>
      </div>
      <footer className="my-5 pt-5 text-muted text-center text-small"></footer>
    </div>
  );
};

export default Checkout;
