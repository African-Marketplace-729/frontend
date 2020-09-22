import React from 'react';

export default function Listing(listing){

    return (
        <div>
            {
                (listing.user.fname &&  listing.user.lname) &&
                <div className='owner-name'>
                    {listing.user.fname + ' ' + listing.user.lname}
                </div>
            }
            <div className='listing-name'>
               listing: {listing.listingname}
            </div>
            <div className='listing-price'>
                price: {listing.price}
            </div>
            <div className='quantity-available'>
                quantity: {listing.quantity}
            </div>
        </div>
    )
}