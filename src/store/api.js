// set up baseurl
import config from '../config/api.json';
import axios from 'axios';

const api = axios.create({
    baseURL: `${config.host}${config.apiPath}`,
    withCredentials: true
});

const getData = ({data}) => data;

export const GET = (path, params) => api.get(path, {params}).then(getData);
export const POST = (path, data) => api.post(path, data);
export const PUT = (path, data) => api.put(path, data);
export const DELETE = (path, data) => api.delete(path, data);