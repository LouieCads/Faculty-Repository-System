import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import upload from "../images/upload.png"; 
import "./ToUpload.css";

function ToUpload() {
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object().shape({
    file: Yup.mixed().required("A file is required"),
  });

  // Handle form submission (upload)
  const handleSubmit = async (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append("file", values.file); 

    try {
      // Send the file to the backend
      const response = await axios.post(
        "http://localhost:3308/Theses", 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle success
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Failed to upload file.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ file: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting, errors, touched }) => (
          <Form>
            <div className="plusSignCtnr">
              {/* Hidden file input */}
              <input
                id="file"
                name="file"
                type="file"
                style={{ display: "none" }}
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]); // Set the selected file
                }}
              />
              {/* Clickable image to trigger file upload */}
              <img
                style={{ cursor: "pointer" }} // Show pointer on hover
                className="plusSign"
                src={upload}
                alt="Upload icon"
                onClick={() => document.getElementById("file").click()} // Trigger the hidden file input
              />
              {touched.file && errors.file ? <div>{errors.file}</div> : null}
            </div>
          </Form>
        )}
      </Formik>

      <p>{message}</p>
    </div>
  );
}

export default ToUpload;
