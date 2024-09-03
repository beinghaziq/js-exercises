import React, { useState, useRef, useEffect } from "react";

// Custom hook to implement
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timeRef = useRef();
  useEffect(() => {
    timeRef.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timeRef.current);
    };
  }, [delay, value]);
  return debouncedValue;
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // Fetch data or perform any other actions with debouncedSearchTerm
    console.log("Fetching data with term:", debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div>
      <h1>Debounce Hook Example</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
      />
      <p>Debounced Term: {debouncedSearchTerm}</p>
    </div>
  );
};

export default App;
