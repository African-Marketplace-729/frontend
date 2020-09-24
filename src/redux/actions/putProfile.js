import axiosWithAuth from '../../utils/axiosWithAuth';

export const PUT_USER_START = 'PUT_USER_START'
export const PUT_USER_SUCCESS = 'PUT_USER_SUCCESS'
export const PUT_USER_ERROR = 'PUT_USER_ERROR'

export const putUser = (user) => (dispatch) => {
    dispatch({type: PUT_USER_START})
    axiosWithAuth().patch(`/users/user/${localStorage.getItem('id')}`, user)
        .then(res => dispatch({
            type: PUT_USER_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: PUT_USER_ERROR,
            payload: err.message
        }));
    };
