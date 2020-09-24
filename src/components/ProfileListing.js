import React from "react";
import { Link } from "react-router-dom";

export default function ProfileListing(props) {
  return (
    <div className="listing-container">
      <>
        Item: {props.listingname}
        <br />
        Description: {props.description}
        <br />
        Price: {props.price}
        <br />
        Quantity: {props.quantity}
        {/* Enter props.imageurl for image later */}
      </>
      <Link to="/src/components/profileEditListing.js/" classname="editbutton">
        edit?
      </Link>
    </div>
  );
}
{
  /* <Link to={'/edit/'+this.props.obj.id}>Edit</Link> */
}
