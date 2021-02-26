import React from 'react';
import './style.scss';

const Search = ({ active, width }) => {
  return (
    <div className={`search ${active ? 'active' : ''}`}>
      <input
        className="search-input"
        type="text"
        placeholder="What are you looking for?"
      />
    </div>
  );
};

export default Search;
