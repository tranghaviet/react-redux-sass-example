// register, login, logout, change password, reset password...
import cookie from 'react-cookie';
import request from './BaseService';

// module.exports = {
//   login: function() {

//   }
// }

export function login(data) {
  return request.post('oauth/token', data);
}
