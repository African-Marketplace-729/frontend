import {
    POST_SIGNIN_START,
    POST_SIGNIN_SUCCESS,
    POST_SIGNIN_ERROR
} from '../actions/postSignin'

const initialState = {
    data: {},
    isFetching: false,
    error: ''
}
export function reducer (state = initialState, action){
    switch(action.type){
        case POST_SIGNIN_START:
            return {
                data: {},
                isFetching: true,
                error: ''
            }
        case POST_SIGNIN_SUCCESS:
            return {
                data: {username: action.payload},
                isFetching: false,
                error: ''
            }
        case POST_SIGNIN_ERROR:
            return {
                data: [],
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}