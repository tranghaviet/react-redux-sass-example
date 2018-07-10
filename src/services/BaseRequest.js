import axios from 'axios';

// export const request = axios.create({
//   baseURL: 'http://10.0.0.103:65108/api/',
//   headers: {
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   }
// });

axios.defaults.baseURL = 'http://10.0.0.103:65108/api/';
export const request = axios;
