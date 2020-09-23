import axiosWithAuth from '../../utils/axiosWithAuth';

export const POST_LISTING_START = 'POST_LISTING_START'
export const POST_LISTING_SUCCESS = 'POST_LISTING_SUCCESS'
export const POST_LISTING_ERROR = 'POST_LISTING_ERROR'

export const postListing = (listing) => (dispatch) => {
    dispatch({type: POST_LISTING_START})
    axiosWithAuth().get('/listings/listing')
    .then(res => dispatch({
        type: POST_LISTING_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: POST_LISTING_ERROR,
        payload: err.message
    }));
};
