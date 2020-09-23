import React, { useState, useEffect } from "react";
import EditListing from "./EditListing";

export default function Listing({ listings, editListing, beingEdited }) {
  return (
    <section className="listings-container">
      <h2>Current Listings</h2>
      <article className="listing">
        {listings.user.fname && listings.user.lname && (
          <article className="listing-info">
            <h4>Listing Provider:</h4>
            <p>{listings.user.fname + " " + listings.user.lname}</p>
          </article>
        )}
        <article className="listing-info">
          <h4>Category:</h4>
          <p>{listings.category}</p>
        </article>
        <article className="listing-info">
          <h4>Subcategory:</h4>
          <p>{listings.subcategory}</p>
        </article>
        <article className="listing-info">
          <h4>Product:</h4>
          <p>{listings.product}</p>
        </article>
        <article className="listing-info">
          <h4>Quantity:</h4>
          <p>{listings.quantity}</p>
        </article>
        <article className="listing-info">
          <h4>Price:</h4>
          <p>{listings.price}</p>
        </article>
        <button
          onClick={() => {
            editListing(listings.id);
          }}
        >
          Edit
        </button>
      </article>
    </section>
  );
}
