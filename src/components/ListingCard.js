import React from "react";

function ListingCard({ listing, image, description, location, onLikeClick, isFavorited, onDelete }) {

  function handleLike(){
    onLikeClick()
  }

  function handleDelete(){
    onDelete(listing)

    fetch(`http://localhost:6001/listings/${listing.id}`,{
      method: "DELETE",
    })
    .then(response => response.json())
    .then(() => console.log('deleted!'))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
