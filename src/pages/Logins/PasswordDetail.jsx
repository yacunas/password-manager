import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loginDetails } from "../../models/login-details";
import { Container, Tabs, Tab } from "react-bootstrap";
import Navigationbar from "../../components/Navigationbar";
import Form from "../../components/Form";
import SharedAccess from "../../components/SharedAccess";

const PasswordDetail = ({ handleClose, handleShow, show, buttonText }) => {
  const { id } = useParams();

  const [details, setDetails] = useState({
    id: "",
    itemName: "",
    email: "",
    password: "",
    category: "",
    lastUsed: "",
    website: "",
    note: "",
    preference: "",
  });

  useEffect(() => {
    const detail = loginDetails.filter((item) => item.id === id);
    setDetails(detail[0]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navigationbar
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        buttonText={buttonText}
      />
      <Container className="mt-4">
        <Tabs
          fill
          defaultActiveKey="detail"
          id="passwordDetailTab"
          className="mb-3"
        >
          <Tab eventKey="detail" title="Login Details">
            <Form details={details} setDetails={setDetails} />
          </Tab>
          <Tab eventKey="access" title="Shared Access">
            <SharedAccess userAccess={details.userAccess} />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default PasswordDetail;
