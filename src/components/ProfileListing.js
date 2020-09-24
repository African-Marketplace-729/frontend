import React, { useState } from "react";

export default function ProfileListing({listing, setBeingEdited, beingEdited}){

function onClick(event){
    event.stopPropagation();
    console.log(setBeingEdited)
    setBeingEdited(listing.listingid);
    
}
    return (
        <div className='listing-container'>
            Item: {listing.listingname}<br/>
            Description: {listing.description}<br/>
            Price: {listing.price} USD<br/>
            Quantity: {listing.quantity}
            {/* Enter props.imageurl for image later */}
            <button onClick={onClick}>edit</button>
        </div>
    )
}

