import axios from 'axios';
import API_KEY from '../consts/'

export default function axiosForSauti() {

    return axios.create({
        baseURL: 'https://market-price-api.herokuapp.com//sauti/developer',
        headers: {
            key: API_KEY
        }
    })
}