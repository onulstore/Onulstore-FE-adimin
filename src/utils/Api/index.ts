import axios from 'axios';

const api = axios.create({
  baseURL: 'http://onulstore.dlcpop.com/',
  headers: {
    'content-type': 'application/json',
  },
});

export default api;
