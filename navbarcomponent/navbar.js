import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./navbar.module.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navbr() {
  const User = useSelector((state) => state?.item?.login);
  const UserCart = useSelector((state) => state?.item?.usercart);

  return (
    <Navbar className={styles.navbarBackground} expand="lg">
      <Container>
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/05/18095854/Food-blog.png"
            style={{ height: "70px" }}
            alt="error"
            className=" rounded-circle"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
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

            <Link href={`/components/cart/${User}`} className="nav-link position-relative" >
              <BsFillCartPlusFill size={30} />
              <p className="top-0 end-0 pe-1 giveRegBg">
                <span className="text-white">{UserCart?.length}</span>
              </p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbr;
