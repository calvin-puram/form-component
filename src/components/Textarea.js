import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
const Textarea = ({ name, label, ...rest }) => {
  return (
    <div className='form__group'>
      <label htmlFor={name}>{label}</label>
      <Field
        as='textarea'
        name={name}
        id={name}
        {...rest}
        className='form__control'
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Textarea;
