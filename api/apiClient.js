import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'https://www.omdbapi.com',
    params:{
        apiKEY: process.env.KEY
    }
})

apiClient.interceptors.request.use((req) => {
    console.log(`Requesting: ${req.method} ${req.url}`);
    // we need to return the config/request object
    return req;
})

apiClient.interceptors.response.use((res) => {
    console.log('Intercepting Response.')
    // make sure to return the response object
    return res;
})