import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import {
  useFormik,
  FieldArray,
  Form,
  Formik,
  Field,
  ErrorMessage
} from "formik";
import * as Yup from "yup";
import XLSX from "xlsx";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };
  const [formValues, setFormValues] = useState(initialValues);

  const onSubmit = (values, submitProps) => {
    console.log(values, submitProps);
    // submitProps.resetForm();
  };

  return (
    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form className="ContactForm">
            <section className="ContactForm_Container">
              <div className="ContactForm_Top">
                <Field
                  type="text"
                  required
                  name="name"
                  id="Contact_Name"
                  placeholder="Name"
                  className="Contact_Input"
                />
                <Field
                  type="email"
                  required
                  name="email"
                  id="Contact_Email"
                  placeholder="Email"
                  className="Contact_Input"
                />
              </div>
              <Field
                type="text"
                required
                name="subject"
                placeholder="Subject"
                id="Contact_Subject"
                autocomplete="off"
                className="Contact_Input"
              />
              <Field
                as="textarea"
                required
                name="message"
                placeholder={"Message"}
                className="Contact_Textarea"
              />
            </section>
            <section className="ContactForm_Btn">
              <Button type="submit" className="ContactForm_Submit">
                Send message!
              </Button>
            </section>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
