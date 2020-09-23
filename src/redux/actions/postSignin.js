import axios from 'axios';

export const POST_SIGNIN_START = 'POST_SIGNIN_START'
export const POST_SIGNIN_SUCCESS = 'POST_SIGNIN_SUCCESS'
export const POST_SIGNIN_ERROR = 'POST_SIGNIN_ERROR'

export const postSignin = (creds) => (dispatch) => {
    dispatch({type: POST_SIGNIN_START})
    axios.post(
        'https://lambda-agora.herokuapp.com/login',
        `grant_type=password&username=${creds.username}&password=${creds.password}`,
        {headers: {
            // btoa is converting our client id/client secret into base64
                Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(res => {
                localStorage.setItem('token', res.data.access_token);
                localStorage.setItem('username', creds.username);
                dispatch({
                    type: POST_SIGNIN_SUCCESS,
                    payload: creds.username
                })
            })
            .catch(err => dispatch({
                type: POST_SIGNIN_ERROR,
                payload: err.message
            }));
    };
