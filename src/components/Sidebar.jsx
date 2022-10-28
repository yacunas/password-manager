import { Offcanvas, ListGroup } from "react-bootstrap";

const Sidebar = ({ handleClose, handleShow, show }) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Password Manager</Offcanvas.Title>
        </Offcanvas.Header>
        <ListGroup variant="flush">
          <ListGroup.Item action active href="/">
            Logins
          </ListGroup.Item>
          <ListGroup.Item action>Secure Note</ListGroup.Item>
        </ListGroup>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
