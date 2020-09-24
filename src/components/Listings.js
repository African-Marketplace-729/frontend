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
        <div className='listings-container'>
            <h3>Current Listings: </h3>
            {data.map(listing => {
                console.log(listing);
                return <Listing key={`listing-${listing.listingid}`} {...listing} />
                }    
            )}
        </div>
        )
}

function mapStateToProps(state) {
  return {
    data: state.listingsReducer.data,
    isFetching: state.listingsReducer.isFetching,
    error: state.listingsReducer.error,
  };
}

export default connect(mapStateToProps, { fetchListings })(Listings);
