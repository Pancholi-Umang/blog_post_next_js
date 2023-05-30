import React from 'react'
import styles from '../../styles/login.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const loginuser = () => {
    return (
        <Container>
            <Row>
                <Col md={6} className="offset-md-3">
                    <h2 className="text-center text-dark mt-3">Login Form</h2>
                    <div className="card my-3">
                        <form className={` ${styles.cardbody_color} card-body`}>
                            <div className="text-center">
                                <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className={`img-fluid ${styles.profile_image_pic} img-thumbnail rounded-circle my-3`} width="200px" alt="profile" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="Username" autoComplete='off' aria-describedby="emailHelp" placeholder="Enter Email..." />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password..." />
                            </div>
                            <div className="text-center"><button type="submit" className={`btn ${styles.btn_color} px-5 mb-5 w-100`}>Login</button></div>
                            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                                Registered? <Link href="/components/registration" className="text-dark fw-bold"> Create an
                                    Account</Link>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default loginuser