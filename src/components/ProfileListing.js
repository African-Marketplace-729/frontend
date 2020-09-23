import React from 'react';

export default function ProfileListing(props){


    return (
        <div className='listing-container'>
            Item: {props.listingname}<br/>
            Description: {props.description}<br/>
            Price: {props.price}<br/>
            Quantity: {props.quantity}
            {/* Enter props.imageurl for image later */}
        </div>
    )
}