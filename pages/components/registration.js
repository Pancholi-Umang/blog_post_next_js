import Link from "next/link";
import React from "react";

const registration = () => {
  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder" />
        <form>
          <h2 className="text-center">
            <strong>Create</strong> an account.
          </h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="password-repeat"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
            />
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

export default registration;
