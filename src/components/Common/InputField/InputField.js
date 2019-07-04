import React from "react";

import { FormGroup, Label, Input } from "reactstrap";

//import styles from "./InputField.module.css";

 

const InputField = ({ type, name, value, label, id, placeholder,onChange }) => {

  return (

    <FormGroup>

      <Label for={id}>{label}</Label>

      <Input type={type} name={name} id={id} placeholder={placeholder} value={value} 

onChange={onChange}  />

    </FormGroup>

  );

};

 

InputField.defaultProps = {

  type: "text"

};

 

export default InputField;
