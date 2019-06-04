// set up baseurl
import config from '../config/api.json';
import axios from 'axios';

export const options = {
    baseURL: `${config.host}${config.apiPath}`,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

const getData = ({data}) => data;

export const GET = (path, params) => axios.get(path, {...options, params}).then(getData);
export const POST = (path, data) => axios.post(path, {...options, data});
export const PUT = (path, data) => axios.put(path, {...options, data});
export const DELETE = (path, data) => axios.delete(path, {...options,data});