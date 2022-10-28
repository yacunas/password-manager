import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { RiMenuLine } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navigationbar = ({
  handleClose,
  handleShow,
  show,
  buttonText,
  handleShowModal,
}) => {
  return (
    <Navbar sticky="top" bg="light" variant="light" className="shadow-sm">
      <Container>
        <Nav className="me-auto">
          <Nav.Link>
            <Button
              size="lg"
              variant="light"
              onClick={handleShow}
              className="d-flex"
            >
              <RiMenuLine />
            </Button>
          </Nav.Link>
          {buttonText ? (
            <Nav.Link>
              <Button variant="light" onClick={handleShowModal}>
                <HiPlus size={"1.2em"} /> Add New
              </Button>
            </Nav.Link>
          ) : null}
        </Nav>

        <Navbar.Brand className="d-flex align-items-center">
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: "black" }}
          >
            Password Manager
          </Link>
          <RiLockPasswordFill size={"1.2em"} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
