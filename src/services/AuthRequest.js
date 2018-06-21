import http from './BaseService';
import cookie from 'react-cookie';
import auth from '../config/auth';

const authRequest = http.create();

authRequest.defaults.headers.common['Authorization'] = `${auth.TOKEN_TYPE} ${cookie.load(auth.TOKEN_KEY)}`;

export const authRequest;
