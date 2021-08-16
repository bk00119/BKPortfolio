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
  const [state, handleSubmit] = useForm("xnqlodqg");
  if (state.succeeded) {
    // return <p>Thanks for joining!</p>;
    return (
      <h4 className="ContactForm_Result">
        Thank you for reaching out to me!
        <br />
        I'll get back to you soon :)
      </h4>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="ContactForm">
      <section className="ContactForm_Container">
        <div className="ContactForm_Top">
          {/* Name */}
          <input
            id="name Contact_Name"
            type="text"
            name="name"
            placeholder="Name"
            className="Contact_Input"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* Email */}
          <input
            id="email Contact_Email"
            type="email"
            name="email"
            placeholder="Email"
            className="Contact_Input"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Subject */}
        <input
          id="subject Contact_Subject"
          autocomplete="off"
          type="text"
          name="subject"
          placeholder="Subject"
          className="Contact_Input"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />

        {/* Message */}
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="Contact_Textarea"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </section>
      <section className="ContactForm_Btn">
        <button
          type="submit"
          className="ContactForm_Submit"
          disabled={state.submitting}
        >
          Send message!
        </button>
      </section>
    </form>
  );
};

export default ContactForm;
