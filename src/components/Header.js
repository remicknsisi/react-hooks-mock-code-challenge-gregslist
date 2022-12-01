import React, { useState } from "react";
import Search from "./Search";

function Header({ onSearchItem, handleSearchChange, search, onSearchSubmit, listingData, setListingData }) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchChange={handleSearchChange} onSearchSubmit={onSearchSubmit} search={search} listingData={listingData} setListingData={setListingData} onSearchItem={onSearchItem}/>
    </header>
  );
}

export default Header;
