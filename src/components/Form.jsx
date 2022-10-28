import React, { useState } from "react";
import { Container, Form as BForm, Button } from "react-bootstrap";
import { passStr } from "../utils/pass-strength";
import Progressbar from "./Progressbar";
import FormTextfield from "./FormTextfield";
import FormSelect from "./FormSelect";
const Form = ({ details, setDetails }) => {
  const [passStrength, setPassStrength] = useState({
    weak: 0,
    medium: 0,
    strong: 0,
    display: false,
  });
  const [validated, setValidated] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [checked, setChecked] = useState(false);

  const handleConfirm = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleInputChange = (event) => {
    let update = {};
    const id = event.target.id;
    const value = event.target.value;
    console.log(id);
    if (id === "password") {
      const str = passStr(event.target.value);
      setPassStrength(str);
      setPassStrength((prevState) => ({
        ...prevState,
        display: true,
      }));
    }
    if (id === "passwordVisibilityCheck") {
      setChecked((prevState) => !prevState);
      setPasswordType((prevState) => {
        if (prevState === "text") {
          return "password";
        }
        return "text";
      });
    }
    update[id] = value;
    setDetails({ ...details, ...update });
  };

  const textFieldOptions = [
    {
      required: true,
      controlId: "itemName",
      label: "Item name",
      type: "text",
      placeholder: "Item name",
      detail: details.itemName,
      handleInputChange: handleInputChange,
      validationError: "Please input item name.",
    },
    {
      required: true,
      controlId: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
      detail: details.email,
      handleInputChange: handleInputChange,
      validationError: "Please input valid email.",
    },
    {
      controlId: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
      detail: details.username,
      handleInputChange: handleInputChange,
    },
    {
      required: true,
      controlId: "password",
      label: "Password",
      type: passwordType,
      placeholder: "Password",
      detail: details.password,
      handleInputChange: handleInputChange,
      checked: checked,
    },
    {
      required: true,
      controlId: "website",
      label: "Website",
      type: "text",
      placeholder: "Website",
      detail: details.website,
      handleInputChange: handleInputChange,
      validationError: "Please input valid URL.",
    },
    {
      controlId: "category",
      detail: details.category,
      handleInputChange: handleInputChange,
    },
    {
      controlId: "note",
      label: "Note",
      type: "text",
      placeholder: "Note",
      detail: details.note,
      handleInputChange: handleInputChange,
      textarea: "textarea",
    },
  ];

  return (
    <Container className="my-4">
      <BForm noValidate validated={validated} onSubmit={handleConfirm}>
        {textFieldOptions.map((option) => {
          let progressbar;
          if (option.controlId === "category")
            return (
              <FormSelect
                key={option.controlId}
                detail={details.category}
                handleInputChange={handleInputChange}
              />
            );
          if (option.controlId === "password")
            progressbar = (
              <Progressbar
                passStrength={passStrength}
                display={passStrength.display}
              />
            );
          return (
            <React.Fragment key={option.controlId}>
              <FormTextfield
                required={option.required}
                controlId={option.controlId}
                label={option.label}
                type={option.type}
                placeholder={option.placeholder}
                detail={option.detail}
                handleInputChange={option.handleInputChange}
                validationError={option.validationError}
                checked={checked}
                textarea={option.textarea}
              />
              {progressbar}
            </React.Fragment>
          );
        })}
        {/* <FormTextfield
          required
          controlId="itemName"
          label="Item name"
          type="text"
          placeholder="Item name"
          detail={details.itemName}
          handleInputChange={handleInputChange}
          validationError="Please input item name."
        />
        <FormTextfield
          required
          controlId="email"
          label="Email"
          type="email"
          placeholder="Email"
          detail={details.email}
          handleInputChange={handleInputChange}
          validationError="Please input valid email."
        />
        <FormTextfield
          controlId="username"
          label="Username"
          type="text"
          placeholder="Username"
          detail={details.username}
          handleInputChange={handleInputChange}
        />
        <FormTextfield
          required
          controlId="password"
          label="Password"
          type={passwordType}
          placeholder="Password"
          detail={details.password}
          handleInputChange={handleInputChange}
          checked={checked}
        /> */}
        {/* <Progressbar
          passStrength={passStrength}
          display={passStrength.display}
        /> */}
        {/* 
        <FormTextfield
          required
          controlId="website"
          label="Website"
          type="text"
          placeholder="Website"
          detail={details.website}
          handleInputChange={handleInputChange}
          validationError="Please input valid URL."
        />
        <FormSelect
          detail={details.category}
          handleInputChange={handleInputChange}
        />

        <FormTextfield
          controlId="note"
          label="Note"
          type="text"
          placeholder="Note"
          detail={details.note}
          handleInputChange={handleInputChange}
          textarea="textarea"
        /> */}
        <Container className="my-3 border rounded p-3 shadow-sm">
          <BForm.Label className="text-muted">Preference</BForm.Label>
          <BForm.Check
            type="switch"
            id="automatic-log"
            label="Automatically log me in to this website"
            style={{ fontSize: "0.9em", color: "#000" }}
          />
          <BForm.Check
            type="switch"
            id="require-master"
            label="Require Master Password"
            style={{ fontSize: "0.9em" }}
          />
        </Container>
        <Button variant="light" type="submit" className="float-end mb-4">
          Confirm Changes
        </Button>
      </BForm>
    </Container>
  );
};

export default Form;
