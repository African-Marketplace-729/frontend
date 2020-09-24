
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../redux/actions/fetchUser';
import axiosWithAuth from '../utils/axiosWithAuth';
import ProfileListing from './ProfileListing';
import {useHistory} from 'react-router-dom';
import ProfileEditListing from './ProfileEditListing';

function UserProfile(props){
 let [beingEdited, setBeingEdited] = useState('');

const history = useHistory();

useEffect(() => {
        props.fetchUser(localStorage.getItem('username'));
}, [])

// useEffect(() => {
//     props.fetchUser(localStorage.getItem('username'));
//   },[beingEdited])

function onClick (event) {
    history.push('/confirm');
}
    if (props.isFetching){
        return <div>Loading</div>
    }

    if (props.error !== ''){
        return <div style={{color: 'red'}}>{props.error}</div>
    }
    return (
        props.data ?  (
            <div className='profile-container'>
                <h1> User Profile Goes Here</h1>
                <div>
                    <h3>
                        {'Name: '} 
                        {props.data.fname !== null ? props.data.fname + " ": ''}
                        {props.data.lname !== null ? props.data.lname : ''}
                    </h3>
                    <h3>Picture: </h3>
                    <h3>Phone Number: {props.data.phonenumber && props.data.phonenumber}</h3>
                    <h3>Email: {props.data.email && props.data.email}</h3>
                    <h3>Location: { props.data.location ? `${props.data.location.city.cityname}, ${props.data.location.city.country.name}` : ''} </h3>
                    {props.data.listings &&
                        <h3>
                            Listings: 
                                {props.data.listings.map(listing => {
                                    if (beingEdited === listing.listingid){
                                        return <ProfileEditListing listing={listing} setBeingEdited={setBeingEdited} fetchUser={props.fetchUser}/>
                                    } else {
                                        return (
                                            <ProfileListing
                                                key={listing.listingid}
                                                listing={listing}
                                                beingEdited={beingEdited}
                                                setBeingEdited={setBeingEdited}
                                            />
                                        )
                                    }
                                })}
                        </h3>
                    }
                </div>
                <button onClick={onClick}>Become a Vendor</button>   
            </div> 
        ) : null)
    
}

function mapStateToProps(state){
    return {
        data: state.userReducer.data,
        isFetching: state.userReducer.isFetching,
        error: state.userReducer.error,
        username: state.signinReducer.data
    }
}

export default connect((mapStateToProps),{fetchUser})(UserProfile)

