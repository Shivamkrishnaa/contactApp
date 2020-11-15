import axios from 'axios';

const API_URL = 'https://polarized-false-plier.glitch.me/'||'http://localhost:4000/';
const instance = axios.create({ baseURL: API_URL, headers: {
    'Content-Type': 'application/json'
  },        withCredentials: true});

export default instance;
