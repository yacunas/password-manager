import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { categories } from "../utils/select-category";

const FormSelect = ({ detail, handleInputChange }) => {
  const style = {
    boxShadow: "0 0 2px #ccc",
  };
  return (
    <FloatingLabel controlId="category" label="Category" className="mt-3">
      <Form.Select
        value={detail}
        style={style}
        onChange={(event) => handleInputChange(event)}
      >
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.value}>
              {category.label}
            </option>
          );
        })}
      </Form.Select>
    </FloatingLabel>
  );
};

export default FormSelect;
