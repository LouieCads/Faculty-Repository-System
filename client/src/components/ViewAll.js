import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ViewAll.css';

function View() {
  const [listOfTheses, setListOfTheses] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
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
          setError(`Server error: ${error.response.status} ${error.response.statusText}`);
        } else if (error.request) {
          setError('No response received from server. Check if the server is running.');
        } else {
          setError(`Error: ${error.message}`);
        }
      });
  }, []);

  // Filter theses based on the search query
  const filteredTheses = listOfTheses.filter((thesis) =>
    thesis.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thesis.filename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="thesisMainC">
      {/* Search bar */}
      <input
        className="searchBar"
        type="text"
        placeholder="Search theses by title or filename"
        aria-label="Search theses"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
      />
      <h1>Thesis List</h1>
      {error && <div className="error">{error}</div>}
      {listOfTheses.length === 0 && !error && <div>Loading theses...</div>}

      <div className="thesisGrid">
        {filteredTheses.length === 0 && <div>No theses found.</div>}
        {filteredTheses.map((value, key) => {
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
