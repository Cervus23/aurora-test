import React from 'react';
import './style.scss';

const Search = () => {
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="What are you looking for?"
      />
    </div>
  );
};

export default Search;
