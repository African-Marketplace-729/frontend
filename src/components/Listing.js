import React, { useState, useEffect } from "react";
import StyledListing from './StyledComponents/StyledListingb';
export default function Listing(listing) {
  console.log(listing);
  
  if (listing !== undefined){
    return (

        <article className="listing-comp-container">
          {listing.user && 
            <article className="listing-info">
              <h4>Listing Provider:</h4>
              <p>{listing.user.fname + " " + listing.user.lname}</p>
            </article>
          }
          {listing.listingname && 
            <article className="listing-info">
              <h4>Product:</h4>
              <p>{listing.listingname}</p>
            </article>
          }
          {listing.description &&
            <article className="listing-info">
              <h4>Description: </h4>
              <p>{listing.description}</p>
            </article>}
          {listing.quantity && 
            <article className="listing-info">
              <h4>Quantity:</h4>
              <p>{listing.quantity}</p>
            </article>}
          {listing.price && 
            <article className="listing-info">
              <h4>Price:</h4>
              <p>{listing.price} USD</p>
            </article>}
        </article>
    );
  } else {
    return null;
  }
}
