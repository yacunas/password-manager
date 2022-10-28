import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { loginDetails } from "../../models/login-details";
import TableBody from "../../components/TableBody";
import Navigationbar from "../../components/Navigationbar";
import Modal from "../../components/Modal";
import { v4 as uuidv4 } from "uuid";
import TableHeader from "../../components/TableHeader";

const PasswordList = ({ handleClose, handleShow, show, buttonText }) => {
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState({
    id: uuidv4(),
    itemName: "",
    email: "",
    password: "",
    category: "",
    lastUsed: "",
    website: "",
    note: "",
    preference: "",
  });

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Navigationbar
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        buttonText={buttonText}
        handleShowModal={handleShowModal}
      />

      <Container className="mt-2">
        <Table hover>
          <TableHeader />
          <tbody>
            {loginDetails &&
              loginDetails.map((item) => (
                <TableBody item={item} key={item.id} />
              ))}
          </tbody>
        </Table>
        <Modal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          details={details}
          setDetails={setDetails}
        />
      </Container>
    </>
  );
};

export default PasswordList;
