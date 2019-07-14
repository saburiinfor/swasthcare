import React from "react";
import {FormGroup, Input, Label} from "reactstrap";
//import styles from "./InputField.module.css";

const InputField = ({ type, name, value, label, id, placeholder,onChange, checked }) => {
  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input type={type} name={name} id={id} placeholder={placeholder} value={value} checked={checked} onChange={onChange}  />
    </FormGroup>
  );
};

InputField.defaultProps = {
  type: "text"
};

export default InputField;