import axiosWithAuth from '../../utils/axiosWithAuth';
import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from './fetchUser';

export const PUT_LISTING_START = 'PUT_LISTING_START'
export const PUT_LISTING_SUCCESS = 'PUT_LISTING_SUCCESS'
export const PUT_LISTING_ERROR = 'PUT_LISTING_ERROR'

export const putListing = (listing) => (dispatch) => {
    dispatch({type: PUT_LISTING_START})
    axiosWithAuth().patch(`/listings/listing/${listing.listingid}`, listing)
    .then(res => {
        dispatch({
            type: PUT_LISTING_SUCCESS,
            payload: res.data
        })
        dispatch({type:FETCH_USER_START})
        axiosWithAuth().get(`users/user/name/${localStorage.getItem('username')}`)
            .then(res => {
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    payload:res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_USER_ERROR,
                    payload: err.message
                })
            })
    })
    .catch(err => dispatch({
        type: PUT_LISTING_ERROR,
        payload: err.message
    }));
};