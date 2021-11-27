import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = ({ name, options, label, ...rest }) => {
  return (
    <div className='form__group'>
      <label htmlFor={name}>{label}</label>
      <Field
        as='select'
        name={name}
        id={name}
        {...rest}
        className='form__control'
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
