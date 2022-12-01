import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingData, setListingData] = useState([])

  function onSearchItem(searchTerm){

    const listingsToDisplay = listingData.filter(listing => {
      if (listing.description.toLowerCase().includes(searchTerm)){
        return listing
      }
    })

    setListingData(listingsToDisplay)
  }

  return (
    <div className="app">
      <Header listingData={listingData} 
      setListingData={setListingData}
      onSearchItem={onSearchItem} />
      <ListingsContainer listingData={listingData} setListingData={setListingData} />
    </div>
  );
}

export default App;
