import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingData, setListingData }) {
  const [isFavorited, setIsFavorited] = useState(false)

  function onHandleLike(){
    setIsFavorited(!isFavorited)
  }

  function onHandleDelete(deletedListing){
    const listingsToDisplay = listingData.filter(listing => {
      return listing !== deletedListing
    })
    setListingData(listingsToDisplay)
  }
      

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listing => {
      setListingData(listing)
    })
  }, [])


  return (
    <main>
      <ul className="cards">
        {listingData.map(listing => {
          return (
            <ListingCard key={listing.description} listing={listing} image={listing.image} description={listing.description} location={listing.location} onLikeClick={onHandleLike} isFavorited={isFavorited} onDelete={onHandleDelete}/>
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
