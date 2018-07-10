// register, login, logout, change password, reset password...
import cookie from 'react-cookie';
import axios from 'axios';
import request from './BaseRequest';

// module.exports = {
//   login: function() {

//   }
// }
// export const authService = {

// }
// const request = axios.create({
//   baseURL: 'http://10.0.0.103:65108/api/',
//   headers: {
//     'Accept': 'application/json',
//     // 'Content-Type': 'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded',
//     // 'Access-Control-Allow-Origin': '*',
//     // 'Authorization': 'Bearer fjahdnflajsdfl',
//   }
// });
export function login(username, password) {
  return axios.post('oauth/token', "grant_type=password&username=" + username + "&password=" + password);
}


// prefilght request
// https://m.alphasights.com/killing-cors-preflight-requests-on-a-react-spa-1f9b04aa5730
// https://codeburst.io/cors-story-of-requesting-twice-85219da7172d
