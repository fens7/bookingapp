// Core
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_LINK,
    headers: {
        'Content-Type': 'application/json'
    }
})

const api = Object.freeze({
    getDestinations(){
        return instance.get('destination')
    },
    getHotels(params){
        return instance.get('hotels', { 
            params 
        })
    }
})

export default api;