import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const cart = () => {
  return (
    <>
      <section className="vh-100">
        <Container className="mt-5">
          <Row className=" d-flex justify-content-center align-items-center h-100">
            <Col>
              <p>
                <span className="h2">Shopping Cart </span>
                <span className="h4">(1 item in your cart)</span>
              </p>
              
              <div className="card mb-4">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                        className="img-fluid"
                        alt="Generic placeholder image"
                      />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Name</p>
                        <p className="lead fw-normal mb-0">iPad Air</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Quantity</p>
                        <p className="lead fw-normal mb-0">1</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Price</p>
                        <p className="lead fw-normal mb-0">$799</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Total</p>
                        <p className="lead fw-normal mb-0">$799</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                        className="img-fluid"
                        alt="Generic placeholder image"
                      />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Name</p>
                        <p className="lead fw-normal mb-0">iPad Air</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Color</p>
                        <p className="lead fw-normal mb-0">
                          <i
                            className="fas fa-circle me-2"
                            style={{ color: "#fdd8d2" }}
                          />
                          pink rose
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Quantity</p>
                        <p className="lead fw-normal mb-0">1</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Price</p>
                        <p className="lead fw-normal mb-0">$799</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Total</p>
                        <p className="lead fw-normal mb-0">$799</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
           
              <div className="card mb-5">
                <div className="card-body p-4">
                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2">
                        Order total:
                      </span>
                      <span className="lead fw-normal">$799</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-light me-2">
                  Continue shopping
                </button>
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