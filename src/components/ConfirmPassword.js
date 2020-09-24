import React, { useState } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';
const initialValues = {
    password: '',
}

const initialError = '';

export default function ConfirmPassword(){
let [values, setValues] = useState(initialValues);
let [error, setError] = useState(initialError);

const history = useHistory();

function onChange (event) {
    let {name, value} = event.target;
    setValues({...values, [name]: value});
}

function onSubmit (event){
    event.preventDefault();
        axiosWithAuth().patch('https://lambda-agora.herokuapp.com/users/changerole')
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => {
                axios.post(
                    'https://lambda-agora.herokuapp.com/login',
                    `grant_type=password&username=${localStorage.getItem('username')}&password=${values.password}`,
                    {headers: {
                        // btoa is converting our client id/client secret into base64
                            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                            'Content-Type': 'application/x-www-form-urlencoded'}})
                    .then(res => {
                        localStorage.removeItem('token');
                        localStorage.setItem('token', res.data.access_token);
                        history.push('/profile');
                    })
                    .catch(err => setError(err.message));

})

    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='password'>Enter Password:
                <input 
                name='password'
                type='password'
                value={values.password}
                onChange={onChange}
                placeholder='enter password'
                />
            </label>
            <button>Confirm Password</button>
            {error !== '' && <div style={{color: 'red'}}>{error}</div>}
        </form>
    )
}