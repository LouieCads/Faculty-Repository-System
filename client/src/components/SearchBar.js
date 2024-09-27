import React, { useState, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const debouncedSearch = useCallback(
    debounce(async (query) => {
      try {
        const response = await axios.get(`http://localhost:3308/Theses/pdfs?q=${query}`);
        console.log('Thesis response data:', response.data);
        onSearch(response.data);
      } catch (error) {
        console.error('Error fetching theses:', error);
        setError('Failed to load theses.');
      }
    }, 300),
    [onSearch]
  );

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <div className="sbarContainer">
      <input 
        type="text" 
        placeholder="Search by filename or title" 
        value={searchQuery} 
        onChange={handleSearchChange} 
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SearchBar;