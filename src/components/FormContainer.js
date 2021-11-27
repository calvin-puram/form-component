import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

const initialValues = {
  name: "",
  description: "",
  options: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("required!"),
  description: Yup.string().required("required!"),
  options: Yup.string().required("required!"),
});

const onSubmit = (values) => console.log(values);

const formContainer = () => {
  const options = [
    { key: "select an option", value: "" },
    { key: "option one", value: "option1" },
    { key: "option two", value: "option2" },
    { key: "option three", value: "option3" },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormControl name='name' type='text' label='Name' control='input' />
            <FormControl
              name='description'
              control='textarea'
              label='Description'
            />
            <FormControl
              name='options'
              label='Options'
              control='select'
              options={options}
            />
            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default formContainer;
