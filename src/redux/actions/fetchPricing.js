import axiosForSauti from '../../utils/axiosForSauti';

export const FETCH_PRICING_START = 'FETCH_PRICING_START'
export const FETCH_PRICING_SUCCESS = 'FETCH_PRICING_SUCCESS'
export const FETCH_PRICING_ERROR = 'FETCH_PRICING_ERROR'

export const fetchPricing = (product) => (dispatch) => {
    dispatch({type: FETCH_PRICING_START})
    axiosForSauti().get(`/filter/?p=${product.product}`)
        .then(res => dispatch({
            type: FETCH_PRICING_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: FETCH_PRICING_ERROR,
            payload: err.message
        }));

    };
