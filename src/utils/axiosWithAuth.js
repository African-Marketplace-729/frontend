import axios from 'axios';

export default function axiosWithAuth(){
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://lambda-agora.herokuapp.com/',
        headers: {authorization: `Bearer ${token}`}
    })
}