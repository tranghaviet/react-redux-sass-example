import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://10.0.0.103:65108/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
});

