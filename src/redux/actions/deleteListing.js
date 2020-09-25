import axiosWithAuth from '../../utils/axiosWithAuth';

export const DELETE_LISTING_START = 'DELETE_LISTING_START'
export const DELETE_LISTING_SUCCESS = 'DELETE_LISTING_SUCCESS'
export const DELETE_LISTING_ERROR = 'DELETE_LISTING_ERROR'

export const deleteListing = (listing) => (dispatch) => {
    dispatch({type: DELETE_LISTING_START})
    axiosWithAuth().delete(`/listings/listing/${listing.listingid}`, listing)
    .then(res => dispatch({
        type: DELETE_LISTING_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: DELETE_LISTING_ERROR,
        payload: err.message
    }));
};