import axios from 'axios';

const client = axios.create({baseURL: process.env.REACT_APP_BASE_URL2});

export const request = ({...options}) =>{
    client.defaults.headers.common.Authorization='Bearer token'
    const onSuccess = (response)=> response;
    const onError = (error)=>error;

    return client(options).then(onSuccess).catch(onError)
}