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

import ContactForm from "./ContactForm";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <h2 class="Page_Title">Contact</h2>
      {/* <SkillSphere /> */}
      <ContactForm />
    </div>
  );
};

export default Contact;
