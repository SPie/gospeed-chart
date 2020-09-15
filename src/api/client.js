import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:8000/api' //TODO
})

export default client