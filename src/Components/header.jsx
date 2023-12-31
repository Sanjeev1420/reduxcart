import React from "react";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Stylesheets/header.css";
import logo from "../Images/applogo.png";
import carticon from "../Images/cartIcon.png";

const Header = () => {
  // Calculates and returns the total quantity of items in the shopping cart.
  const getTotalCartQuantity = () => {
    const cartData = useSelector((state) => state.cart.products);
    return cartData.length;
  };

  return (
    <div id="headerCnt" className="mb-3">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="60"
              height="60"
              className="justify-content-start"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Text className="justify-content-start app-headerName">ShopEasy!</Navbar.Text>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />

          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Button id="cartbtn" variant="outline-dark" >
              <img
                src={carticon}
                width="30"
                height="30"
                className=""
                alt=""
              />
              Cart ~  {" "}
              <Navbar.Text variant="custom" className="cartbtnQnt">
                {getTotalCartQuantity() || 1}
              </Navbar.Text>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
