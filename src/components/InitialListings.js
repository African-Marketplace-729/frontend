import React, { useEffect } from 'react';
import PriceCheck from './PriceCheck';
import {connect} from 'react-redux'
import {fetchPricing} from '../redux/actions/fetchPricing'
import {SAUTI_PRODUCTS} from '../consts'
function InitialListings({data, isFetching, error, fetchPricing}){
    let records = [];
    if (data.records){
        records = data.records;
    }

useEffect(() => {
    fetchPricing(
        SAUTI_PRODUCTS[Math.floor(Math.random() 
        * (SAUTI_PRODUCTS.length - 1))].product
        )
}, [])

    return (
        <>
            <PriceCheck />
            {isFetching ? <div>Loading</div> 
            : error ? <div style={{color: 'red'}}>{error}</div> 
            : records.map(record => {
                return (
                    <div className='initial-listing-container'>
                        <h4>Country: {record.country}</h4>
                        <h4>Market: {record.market}</h4>
                        <h4>Product: {record.product}</h4>
                        <h4>Retail Price: {`${record.retail.toFixed(2)} ${record.unit}`} </h4>
                        <h4>Wholesale Price: {`${record.wholesale.toFixed(2)} ${record.unit}`} </h4>
                    </div>
                )
            })}
            
        </>
    )
}

function mapStateToProps(state){
    return {
        data: state.pricingReducer.data,
        isFetching: state.pricingReducer.isFetching,
        error: state.pricingReducer.error,
    }
}
export default connect ((mapStateToProps),{fetchPricing})(InitialListings)