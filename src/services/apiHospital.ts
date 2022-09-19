import axios from "axios";

export const apiHospital = axios.create({
    baseURL: 'https://clinicasaqui-api.herokuapp.com/'
})