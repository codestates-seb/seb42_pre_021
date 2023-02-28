// import axios from 'axios';
// const baseURL = axios.create({
//   baseURL: 'http://localhost:3001',
// });
// export default baseURL;

import axios from 'axios';
axios.defaults.withCredentials = true;

const customAxios = axios.create({
  baseURL: 'http://ec2-3-36-97-103.ap-northeast-2.compute.amazonaws.com:8080/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
customAxios.defaults.withCredentials = true;

const authorization = JSON.parse(localStorage.getItem('authorization'));
const refresh = JSON.parse(localStorage.getItem('refresh'));

customAxios.defaults.headers.common['authorization'] = authorization
  ? `Bearer ${authorization}`
  : null;
customAxios.defaults.headers.common['refresh'] = refresh ? `Bearer ${refresh}` : null;

export default customAxios;
