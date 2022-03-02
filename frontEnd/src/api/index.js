import axios from 'axios';

const url = 'https://intern-fetch.herokuapp.com';
const API = axios.create({
    baseURL: url
})

//adding auth token id to headers of request so that we can check User will valid or not
API.interceptors.request.use(function (req) {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    
    }
    return req;
});

export const signIn = (userData) => API.post(`/user/signin`, userData);
export const fetchInfo = () => API.get(`/info`);
export const createInfo = (formData) => API.post(`/info`, formData);
export const deleteInfo = (id) => API.delete(`/info/${id}`);
