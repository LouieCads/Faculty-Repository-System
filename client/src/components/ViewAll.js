import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./ViewAll.css";


function View() {
  const [listOfTheses, setListOfTheses] = useState([]);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3308/Theses/pdfs')
      .then((response) => {
        console.log('Thesis response data:', response.data);
        if (Array.isArray(response.data)) {
          setListOfTheses(response.data);
        } else {
          setError('Unexpected data format received from server.');
          console.error('Unexpected data format:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching theses:', error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError(`Server error: ${error.response.status} ${error.response.statusText}`);
          console.error('Error response:', error.response);
        } else if (error.request) {
          // The request was made but no response was received
          setError('No response received from server. Check if the server is running.');
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          setError(`Error: ${error.message}`);
        }
      });
  }, []);

  return (
    <div className="thesisMainC">
      <h1>Thesis List</h1>
      {error && <div className="error">{error}</div>}
      {listOfTheses.length === 0 && !error && <div>Loading theses...</div>}
      <div className="thesisGrid">
        {listOfTheses.map((value, key) => {
          return (
            <div className="thesis" key={key}>
              <div className="name">
                <a
                  href={`http://localhost:3308/Theses/download/${value.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={value.filename}
                >
                  {value.filename}
                </a>
              </div>
              <div>{value.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default View;