import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchListings } from "../redux/actions/fetchListings";
import Listing from "./Listing";

function Listings(props) {
  const { isFetching, data, error, fetchListings } = props;

  useEffect(() => {
    fetchListings();
  }, []);

  if (isFetching) return <div>Loading...</div>;

  if (error !== "") {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div className="listings-container">
      {data.map(listing => (
        <Listing key={`listing-${listing.id}`} {...listing} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.listingsReducer.data,
    isFetching: state.listingsReducer.isFetching,
    error: state.listingsReducer.error,
  };
}

export default connect(mapStateToProps, { fetchListings })(Listings);
