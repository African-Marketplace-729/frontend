import axiosWithAuth from '../../utils/axiosWithAuth';

export const FETCH_USER_START = 'FETCH_USER_START'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

export const fetchUser = (user) => (dispatch) => {
    dispatch({type: FETCH_USER_START})
    axiosWithAuth().get(`/users/user/name/${user}`)
        .then(res => dispatch({
            type: FETCH_USER_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: FETCH_USER_ERROR,
            payload: err.message
        }));

    };
