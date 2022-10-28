import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const FormCheckbox = ({ handleInputChange, checked }) => {
  const handleChange = (event) => {
    handleInputChange(event);
  };
  const icon = checked ? (
    <AiFillEyeInvisible
      id="passwordVisibilityCheck"
      size="1.5em"
      className="me-2"
    />
  ) : (
    <AiFillEye id="passwordVisibilityCheck" size="1.5em" className="me-2" />
  );

  return (
    <Button
      id="passwordVisibilityCheck"
      size="sm"
      variant="link"
      style={{ textDecoration: "none", color: "black" }}
      onClick={(event) => handleChange(event)}
    >
      {icon} Show Password
    </Button>
  );
};

export default FormCheckbox;
