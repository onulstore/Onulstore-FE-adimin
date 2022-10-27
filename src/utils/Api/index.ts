import axios from 'axios';

const api = axios.create({
  baseURL: 'https://onulstore.breon.ml/',
  headers: {
    'content-type': 'application/json',
  },
});

export default api;
