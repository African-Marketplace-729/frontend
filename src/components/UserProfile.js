
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../redux/actions/fetchUser';
import ProfileListing from './ProfileListing';
import {useHistory} from 'react-router-dom';
import ProfileEditListing from './ProfileEditListing';
import StyledProfile from './StyledComponents/StyledProfile';

function UserProfile(props){
 let [beingEdited, setBeingEdited] = useState('');

const history = useHistory();

useEffect(() => {
        props.fetchUser(localStorage.getItem('username'));
}, [])

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
            <StyledProfile className='profile-container'>
                <div>
                    <div>
                        <h4>
                            Name
                        </h4>
                        {props.data.fname !== null ? props.data.fname + " ": ''}
                        {props.data.lname !== null ? props.data.lname : ''}
                    </div>

                    {/* <h3>Picture: </h3> */}
                    <div>
                        <h4>
                            Phone Number
                        </h4>
                        {props.data.phonenumber && props.data.phonenumber}
                    </div>
                    <div>
                        <h4>
                            Email
                        </h4>
                        {props.data.email && props.data.email}
                    </div>
                    <div>

                    </div>
                    <div>
                        <h4>
                            Location
                        </h4>
                        { props.data.location ? `${props.data.location.city.cityname}, ${props.data.location.city.country.name}` : ''} 
                    </div>
                    {props.data.listings &&
                        <div className='listings-container'>
                            <div className='listing-header'>
                            Listings
                            </div>
                            <div className='listing'>
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
                            </div>
                        </div>
                    }
                </div>
                <button onClick={onClick}>Become a Vendor</button>   
            </StyledProfile> 
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

