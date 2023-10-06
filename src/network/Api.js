import axios from "axios";

axios.defaults.baseURL =
    process.env.NODE_ENV === 'development' ?
        'http://localhost:8001' : 'http://35.188.193.77:8001';


export const apiNoToken = async (url, method, data) => {
    const body = await axios({
        url, method, data
    })
    return body.data
}

export const api = async (url, method, data) => {
    const token = localStorage.getItem('token')
    const body = await axios({
        url, method, data,
        headers: { "Authorization": `Bearer ${token}` }
    })
    return body.data
}