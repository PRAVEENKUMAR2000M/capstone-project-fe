import axios from "axios"

const baseURL = 'https://capstone-be-nq1i.onrender.com/api'


const authInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'content-type': 'application/json'
    }
});

const protectedInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'content-type': 'application/json'
    }
})

protectedInstance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = 'bearer ' + token;
        }
        return config
    }
)

export default {
    authInstance,
    protectedInstance
}