import React, { useState } from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { passwordGenerate } from "../utils/pass-generate";
import { HiOutlineRefresh } from "react-icons/hi";

const GeneratePassword = () => {
  const [randomPassword, setRandomPassword] = useState("");
  const handleRefresh = () => {
    setRandomPassword(passwordGenerate());
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body className="d-flex align-items-center">
        <h5 className="m-0">{randomPassword}</h5>
        <Button
          variant="light"
          className="ms-2"
          size="sm"
          onClick={handleRefresh}
        >
          <HiOutlineRefresh />
        </Button>
      </Popover.Body>
    </Popover>
  );
  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button className="m-2" size="sm" variant="light" onClick={handleRefresh}>
        Generate Password
      </Button>
    </OverlayTrigger>
  );
};

export default GeneratePassword;
