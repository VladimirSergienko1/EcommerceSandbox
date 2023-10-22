import axios from "axios";

const url = 'https://strapi-store-server.onrender.com/api'

export const fetchUrl = axios.create({
    baseURL: url
})