import axiosWithAuth from '../../utils/axiosWithAuth';
import{
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from './fetchUser'

export const DELETE_LISTING_START = 'DELETE_LISTING_START'
export const DELETE_LISTING_SUCCESS = 'DELETE_LISTING_SUCCESS'
export const DELETE_LISTING_ERROR = 'DELETE_LISTING_ERROR'
export const deleteListing = (listing) => (dispatch) => {
    dispatch({type: DELETE_LISTING_START})
    axiosWithAuth().delete(`/listings/listing/${listing.listingid}`)
    .then(res => {
        dispatch({
            type: DELETE_LISTING_SUCCESS,
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
    }
    )
    .catch(err => dispatch({
        type: DELETE_LISTING_ERROR,
        payload: err.message
    }));
};