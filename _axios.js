import axios from 'axios';

const API_URL = 'https://generated-gold-dolphin.glitch.me/' ;
const instance = axios.create({ baseURL: API_URL, headers: {
    'Content-Type': 'application/json'
  },        withCredentials: true});

export default instance;