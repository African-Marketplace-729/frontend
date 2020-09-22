import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../redux/actions/fetchUser';
import Listing from './Listing';

function UserProfile(props){
let {fname, lname, email, phonenumber, listings, location} = props.data;

useEffect(() => {
    fetchUser();
})

    return (
        <div className='profile-container'>
            <h1> User Profile Goes Here</h1>
            <div>
                <h3>Name: {fname && fname}{lname &&lname}</h3>
                <h3>Picture: </h3>
                <h3>Phone Number: {phonenumber && phonenumber}</h3>
                <h3>Email: {email && email}</h3>
                <h3>Location: {`${location.city.cityname}, ${location.city.country.name}`} </h3>
                <h3>
                    Listings: {listings.map(listing => {
                    return <Listing key={listing.listingid} {...listing} />
                    })}
                </h3>    
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        data: state.userReducer.data,
        isFetching: state.userReducer.isFetching,
        error: state.userReducer.error
    }
}

export default connect((mapStateToProps),{fetchUser})(UserProfile)