import {
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from '../actions/fetchUser'

const initialState = {
    isFetching: false,
    error: ''
}
export function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_USER_START:
            return {
                data: [],
                isFetching: true,
                error: ''
            }
        case FETCH_USER_SUCCESS:
            return {
                data: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_USER_ERROR:
            return {
                data: [],
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}