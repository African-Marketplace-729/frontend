import axios from 'axios';
import {API_KEY} from '../../consts'
export const FETCH_PRICING_START = 'FETCH_PRICING_START'
export const FETCH_PRICING_SUCCESS = 'FETCH_PRICING_SUCCESS'
export const FETCH_PRICING_ERROR = 'FETCH_PRICING_ERROR'

export const fetchPricing = (product) => (dispatch) => {
    if (product){
        dispatch({type: FETCH_PRICING_START})
        axios.get(`https://market-price-api.herokuapp.com/sauti/developer/filter/?p=${product}`, {headers: {key: API_KEY}})
            .then(res => dispatch({
                type: FETCH_PRICING_SUCCESS,
                payload: res.data
            }))
            .catch(err => dispatch({
                type: FETCH_PRICING_ERROR,
                payload: err.message
            }));
    }
    };
