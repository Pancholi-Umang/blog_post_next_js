import Link from "next/link";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas/register";
import { postUsersdata } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Registration = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      dispatch(postUsersdata(values));
      formik?.resetForm();
    },
  });

  const router = useRouter();
  const User = useSelector((state) => state?.item?.user);

  useEffect(() => {
    User?.name ? router.push("/") : console.log("not logged in");
  }, [User]);

  return (
    <div className="register-photo">
      <Head>
        <title>Registration</title>
      </Head>
      <div className="form-container">
        <div className="image-holder" />
        <form onSubmit={formik?.handleSubmit}>
          <h2 className="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              onBlur={formik?.handleBlur}
              onChange={formik?.handleChange}
              value={formik?.values?.name}
              name="name"
              placeholder="Username"
            />
            {formik?.errors?.name && formik?.touched?.name ? (
              <p className="form-error"> {formik?.errors?.name} </p>
            ) : null}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              value={formik?.values?.email}
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              name="email"
              placeholder="Email"
              autoComplete="off"
            />
            {formik?.errors?.email && formik?.touched?.email ? (
              <p className="form-error"> {formik?.errors?.email} </p>
            ) : null}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              value={formik?.values?.password}
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              name="password"
              autoComplete="off"
              placeholder="Password"
            />
            {formik?.errors?.password && formik?.touched?.password ? (
              <p className="form-error"> {formik?.errors?.password} </p>
            ) : null}
          </div>
          <div className="form-group d-flex justify-content-center">
            <button className="btn btn-primary btn-block mb-3" type="submit">
              Sign Up
            </button>
          </div>
          <Link href="/components/loginuser" className="already">
            You already have an account? Login here.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Registration;
