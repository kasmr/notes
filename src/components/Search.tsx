import React from 'react';
import store from '../store/store';

const Search = () => {
  return (
    <input
      type='text'
      value={store.search}
      onChange={(e) => (
        console.log(store.search, e.target.value),
        (store.search = e.target.value)
      )}
    ></input>
  );
};

export default Search;
