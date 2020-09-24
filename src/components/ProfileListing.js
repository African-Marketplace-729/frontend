import React, { useState } from "react";
import StyledListing from './StyledComponents/StyledListing';
export default function ProfileListing({listing, setBeingEdited, beingEdited}){

function onClick(event){
    event.stopPropagation();
    console.log(setBeingEdited)
    setBeingEdited(listing.listingid);
    
}
    return (
        <StyledListing className='listing-container'>
            {listing.listingname}
            <div className='description'>
                {listing.description}    
            </div>
            <div className='price'>
                {listing.price} USD
            </div>
            <div className='quantity'>
               Quantity: {listing.quantity}
            </div>
            {/* Enter props.imageurl for image later */}
            <button onClick={onClick}>edit</button>
        </ StyledListing>
    )
}

