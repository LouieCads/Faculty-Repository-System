import { useState } from "react";
import Data from "./Data";

const getFilteredItems = (query, items) => {
  if (!query) {
    return [];
  }
  return items.filter(
    (data) =>
      data.first_name.toLowerCase().includes(query.toLowerCase()) || 
      data.last_name.toLowerCase().includes(query.toLowerCase()) ||
      data.gender.toLowerCase().includes(query.toLowerCase()) || 
      data.email.toLowerCase().includes(query.toLowerCase()) 
  );
};

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const items = Data;
  const filteredItems = getFilteredItems(query, items);
  
  return (
    <div className="sbarContainer">
      {/* <label>Maghanap: </label> */}
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Find Something"
      />


      {query && (
        <ul>
          {filteredItems.map((value) => (
            <li key={value.id}>
              <p>
                <strong></strong> {value.first_name} {value.last_name}
                <br />
                <strong></strong> {value.gender}
                <br />
                <strong></strong> {value.email}
                <br />
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
