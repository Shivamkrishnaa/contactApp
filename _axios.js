import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API || 'http://localhost:4000/';
const instance = axios.create({ baseURL: API_URL, headers: {
    'Content-Type': 'application/json'
  },        withCredentials: true});

export default instance;