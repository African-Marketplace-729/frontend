import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from '../actions/fetchUser'

import {
    PUT_USER_START,
    PUT_USER_SUCCESS,
    PUT_USER_ERROR
} from '../actions/putProfile'

const initialState = {
    data: [],
    isFetching: false,
    error: '',
    isPutting: false,
    putData: [],
    putError: ''
}
export function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_USER_START:
            return {
                ...state,
                data: [],
                isFetching: true,
                error: ''
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                data: [],
                isFetching: false,
                error: action.payload
            }
        case PUT_USER_START:
            return {
                ...state,
                putData: [],
                isPuting: true,
                putError: ''
            }
        case PUT_USER_SUCCESS:
            return {
                putData: action.payload,
                isPuting: false,
                putError: ''
            }
        case PUT_USER_ERROR:
            return {
                putData: [],
                isPuting: false,
                putError: action.payload
            }
        default:
            return state;
    }
}