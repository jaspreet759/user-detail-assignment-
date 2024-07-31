import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ query, onSearch }) => (
  <input 
    type="text" 
    placeholder="Search by name or username" 
    value={query}
    onChange={(e) => onSearch(e.target.value)}
  />
);

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default SearchBar;
