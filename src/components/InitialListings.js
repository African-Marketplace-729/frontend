import React, { useEffect } from "react";
import PriceCheck from "./PriceCheck";
import { connect } from "react-redux";
import { fetchPricing } from "../redux/actions/fetchPricing";
import { SAUTI_PRODUCTS } from "../consts";
import Styledlistings from "./StyledComponents/Styledlistings";
function InitialListings({ data, isFetching, error, fetchPricing }) {
  let records = [];
  if (data.records) {
    records = data.records;
  }

  useEffect(() => {
    fetchPricing(
      SAUTI_PRODUCTS[Math.floor(Math.random() * (SAUTI_PRODUCTS.length - 1))]
        .product
    );
  }, []);

  return (
    <>
      <PriceCheck />
      {isFetching ? (
        <div>Loading</div>
      ) : error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        records.map((record) => {
          return (
            <Styledlistings className="initial-listing-container">
              <div class="data">
                <h2>Country:</h2> <p>{record.country}</p>
              </div>
              <div class="data">
                <h2>Market:</h2> <p>{record.market}</p>
              </div>
              <div class="data">
                <h2>Product:</h2> <p>{record.product}</p>
              </div>
              <div class="data">
                <h2>Retail Price:</h2>
                <p>{`${record.retail.toFixed(2)} per ${record.unit}`} </p>
              </div>
              <div class="data">
                <h2>Wholesale Price: </h2>
                <p>{`${record.wholesale.toFixed(2)} per ${record.unit}`} </p>
              </div>
            </Styledlistings>
          );
        })
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    data: state.pricingReducer.data,
    isFetching: state.pricingReducer.isFetching,
    error: state.pricingReducer.error,
  };
}
export default connect(mapStateToProps, { fetchPricing })(InitialListings);
