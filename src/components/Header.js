import React from "react";
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";
import StyledHeader from "./StyledComponents/StyledHeader";

export default function Navbar() {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo" />
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/pricecheck">Price Check</Link>
        <Link to="/listings">Listings</Link>
        <Link to="/addlisting">Add Listing</Link>
      </nav>
    </StyledHeader>
  );
}
