import axios from 'axios'

export const key = "fb5eaa566be6d99b1157c15a9585e22c5063b195"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api