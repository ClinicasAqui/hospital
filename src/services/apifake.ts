import axios from "axios";

export const apiFake = axios.create({
    baseURL: 'https://hosapifake1.herokuapp.com'
})