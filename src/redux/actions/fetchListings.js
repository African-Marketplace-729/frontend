import axiosWithAuth from '../../utils/axiosWithAuth';

export const FETCH_LISTINGS_START = 'FETCH_LISTINGS_START'
export const FETCH_LISTINGS_SUCCESS = 'FETCH_LISTINGS_SUCCESS'
export const FETCH_LISTINGS_ERROR = 'FETCH_LISTINGS_ERROR'

export const fetchListings = () => (dispatch) => {
    dispatch({type: FETCH_LISTINGS_START})
    axiosWithAuth().get('/listings/listings')
        .then(res => dispatch({
            type: FETCH_LISTINGS_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: FETCH_LISTINGS_ERROR,
            payload: err.message
        }));

    };
