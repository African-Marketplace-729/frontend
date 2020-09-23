import {
    FETCH_PRICING_START,
    FETCH_PRICING_SUCCESS,
    FETCH_PRICING_ERROR
} from '../actions/fetchPricing'

const initialState = {
    data: [],
    isFetching: false,
    error: ''
}
export function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_PRICING_START:
            return {
                data: [],
                isFetching: true,
                error: ''
            }
        case FETCH_PRICING_SUCCESS:
            return {
                data: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_PRICING_ERROR:
            return {
                data: [],
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}