// set up baseurl
import config from '../config/api';
import axios from 'axios';

const api = axios.config({
    baseURL: `${config.host}${config.apiPath}`,
    withCredentials: true
});

export const GET = (path, params) => api.get(path, {params});
export const POST = (path, data) => api.post(path, data);
export const PUT = (path, data) => api.put(path, data);
export const DELETE = (path, data) => api.delete(path, data);