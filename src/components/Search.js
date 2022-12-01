import React, { useState } from "react";

function Search({ onSearchItem }) {
  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSearchItem(search)
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
      />
      {/* {console.log(search)} */}
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;