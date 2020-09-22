import {
    FETCH_LISTINGS_START,
    FETCH_LISTINGS_SUCCESS,
    FETCH_LISTINGS_ERROR
} from '../actions/fetchListings'

const initialState = {
    data: [],
    isFetching: false,
    error: ''
}
export function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_LISTINGS_START:
            return {
                data: [],
                isFetching: true,
                error: ''
            }
        case FETCH_LISTINGS_SUCCESS:
            return {
                data: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_LISTINGS_ERROR:
            return {
                data: [],
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}