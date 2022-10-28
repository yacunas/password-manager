import React from "react";
import { FloatingLabel, Form, Container } from "react-bootstrap";
import FormCheckbox from "./FormCheckbox";
import GeneratePassword from "./GeneratePassword";

const FormTextfield = ({
  required,
  controlId,
  label,
  type,
  placeholder,
  detail,
  handleInputChange,
  checked,
  validationError,
  textarea,
}) => {
  let style = {
    boxShadow: "0 0 2px #ccc",
  };

  if (!required)
    style = {
      ...style,
      borderColor: "#ced4da",
      backgroundImage: "none",
    };

  if (textarea)
    style = {
      ...style,
      height: "150px",
    };

  const Validation = () => {
    if (required)
      return (
        <Form.Control.Feedback type="invalid">
          {validationError}
        </Form.Control.Feedback>
      );
  };

  const PasswordVisibility = () => {
    if (controlId === "password")
      return (
        <>
          <Container className="d-flex align-items-center">
            <FormCheckbox
              handleInputChange={handleInputChange}
              checked={checked}
            />
            <GeneratePassword />
          </Container>
        </>
      );
  };

  return (
    <FloatingLabel controlId={controlId} label={label} className="mt-3">
      <Form.Control
        required={required}
        type={type}
        placeholder={placeholder}
        value={detail || ""}
        onChange={(event) => handleInputChange(event)}
        style={style}
        as={textarea}
      />
      <Validation />
      <PasswordVisibility />
    </FloatingLabel>
  );
};

export default FormTextfield;
