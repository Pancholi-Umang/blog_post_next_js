import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from './navbar.module.css';

function Navbr() {
  return (
    <Navbar className={styles.navbarBackground} expand="lg">
      <Container>
        <Link className="navbar-brand" href="./components/home">
          Shopping
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/components/home" className="nav-link">
              HOME
            </Link>
            <Link href="/components/food" className="nav-link">
              FOOD
            </Link>
            <Link href="/components/drink" className="nav-link">
              DRINK
            </Link>
            <Link href="/components/restorent" className="nav-link">
              BEST RESTORENT
            </Link>
            <Link href="/components/about" className="nav-link">
              ABOUT
            </Link>
            <Link href="/components/workwithme" className="nav-link">
              WORK WITH ME
            </Link>
            <Link href="/components/cart" className="nav-link">
              CART
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbr;
