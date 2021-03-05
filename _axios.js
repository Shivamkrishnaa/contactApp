import axios from 'axios';

const API_URL = 'https://relieved-lilac-jaborosa.glitch.me/';
const instance = axios.create({ baseURL: API_URL, headers: {
    'Content-Type': 'application/json'
  },        withCredentials: true});

export default instance;