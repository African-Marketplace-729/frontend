import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchListings } from "../redux/actions/fetchListings";
import Listing from "./Listing";
import StyledListing from './StyledComponents/StyledListing';

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
        <StyledListing>
          <h4>Current Listings: </h4>
          <div className='listings-container'>
            {data.map(listing => {
                console.log(listing);
                return <Listing key={`listing-${listing.listingid}`} {...listing} />
                }    
            )}
          </div>
        </StyledListing>
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
