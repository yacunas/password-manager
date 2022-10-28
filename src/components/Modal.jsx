import React from "react";
import { Modal as BModal } from "react-bootstrap";
import PasswordDetailForm from "./Form";

const Modal = ({ showModal, handleCloseModal, details, setDetails }) => {
  return (
    <>
      <BModal show={showModal} onHide={handleCloseModal}>
        <BModal.Header closeButton>
          <BModal.Title>Add New</BModal.Title>
        </BModal.Header>

        <BModal.Body>
          <PasswordDetailForm details={details} setDetails={setDetails} />
        </BModal.Body>
      </BModal>
    </>
  );
};

export default Modal;
