import axios from 'axios';

<<<<<<< HEAD
const API_URL = 'https://relieved-lilac-jaborosa.glitch.me/';
=======
const API_URL = process.env.NEXT_PUBLIC_API||'http://localhost:4000/';
>>>>>>> 4efd8ea6ebb96394bc5d306d8eb2828106c16d72
const instance = axios.create({ baseURL: API_URL, headers: {
    'Content-Type': 'application/json'
  },        withCredentials: true});

export default instance;