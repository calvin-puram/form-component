import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "checkbox":
    case "radio":
    case "date":
    default:
      return null;
  }
};

export default FormControl;
