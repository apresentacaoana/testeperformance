import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:3000/'
})

client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers['Authorization'] = token;
        }
        return config;
    },
    (error) => {
        console.log(error)
    }
)


export default client;