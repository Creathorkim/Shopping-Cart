import React from "react";
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const handleCartCheckout = () => {
  alert("Hang tight! The checkout rocket hasn't launched yet 🚀");
};

const NavigationBar = ({cartItemCount}) => {
  return (
    <Navbar
      style={{ backgroundColor: "rgb(112, 53, 236)" }}
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>React Shopping Cart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="shop">
              Shop
            </Nav.Link>
            <Nav.Link>
              <FaShoppingCart style={{ fontSize: "20px", color: "white" }} />
              <Badge bg="white" text="dark" className="mx-2">
                {cartItemCount}
              </Badge>
            </Nav.Link>
            <Nav.Link>
              <Button onClick={handleCartCheckout} size="sm" variant="light">
                Checkout Cart
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
