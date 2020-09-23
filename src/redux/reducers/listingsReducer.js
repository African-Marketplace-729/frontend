import {
    FETCH_LISTINGS_START,
    FETCH_LISTINGS_SUCCESS,
    FETCH_LISTINGS_ERROR
} from '../actions/fetchListings'

import {
    POST_LISTING_START,
    POST_LISTING_SUCCESS,
    POST_LISTING_ERROR
} from '../actions/postListing'

const initialState = {
    data: [],
    isFetching: false,
    error: '',
    postData: [],
    isPosting: false,
    postError: '',
}
export function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_LISTINGS_START:
            return {
                ...state,
                data: [],
                isFetching: true,
                error: ''
            }
        case FETCH_LISTINGS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_LISTINGS_ERROR:
            return {
                ...state,
                data: [],
                isFetching: false,
                error: action.payload
            }
        case POST_LISTING_START:
            return {
                ...state,
                postData: [],
                isPosting: true,
                postRrror: ''
            }
        case POST_LISTING_SUCCESS:
            return {
                ...state,
                postData: action.payload,
                isPosting: false,
                postError: ''
            }
        case POST_LISTING_ERROR:
            return {
                ...state,
                postData: [],
                isPosting: false,
                postError: action.payload
            }
        default:
            return state;
    }
}