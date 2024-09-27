import React, { useState } from "react";
import axios from "axios";
import upload from "../images/upload.png";
import "./ToUpload.css";

function ToUpload() {
  const [message, setMessage] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setMessage('Uploading...');
      const response = await axios.post('http://localhost:3308/Theses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('File uploaded successfully!');
      window.location.reload();
    } catch (error) {
      console.error(error);
      setMessage('Failed to upload file.');
    }
  };

  return (
    <div className="mainCntr">
      <div className="plusSignCtnr">
        <input
          id="file"
          name="file"
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="file">
          <img
            style={{ cursor: "pointer" }}
            className="plusSign"
            src={upload}
            alt="Upload icon"
          />
        </label>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default ToUpload;