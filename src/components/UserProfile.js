import React from "react";
import Cards from "./Cards";

export default function UserProfile() {
  return (
    <div className="profile-container">
      <h1 className="ShopName">`${UserProfile.shopname}`</h1>
      <div>
        <hr />
        <h3>Name: </h3>
        <img
          className="profilepic"
          src={`${UserProfile.picture}`}
          alt="Profile"
        />
        <hr />
        <h3>Member Since: </h3>
        <h3>Location: </h3>
        <h3>Listings: </h3>
        <Cards />
      </div>
    </div>
  );
}
