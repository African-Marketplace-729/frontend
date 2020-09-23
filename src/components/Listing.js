
import React, { useState, useEffect } from "react";

export default function Listing(listing) {

  return (
    <section className="listings-container">
      <h2>Current Listings</h2>
      {listings.map(listing => {
        return (
          <article className="listings">
            {
                (listing.user.fname &&  listing.user.lname) &&
                <article className="listing">
                  <h4>Listing Provider:</h4>                    
                  <p>{listing.user.fname + ' ' + listing.user.lname}</p>
                </article>
            }
            <article className="listing">
              <h4>Category:</h4>
              <p>{listing.category}</p>
            </article>
            <article className="listing">
              <h4>Subcategory:</h4>
              <p>{listing.subcategory}</p>
            </article>
            <article className="listing">
              <h4>Product:</h4>
              <p>{listing.product}</p>
            </article>
            <article className="listing">
              <h4>Quantity:</h4>
              <p>{listing.quantity}</p>
            </article>
            <article className="listing">
              <h4>Price:</h4>
              <p>{listing.price}</p>
            </article>
          </article>
        );
      })}
    </section>
  );
}

