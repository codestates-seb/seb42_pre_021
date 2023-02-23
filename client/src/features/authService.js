//http 요청을 모아두는 파일 post,patch ...
import axios from 'axios';

// const URL = 'http://localhost:3001/';
const URL = 'https://d1ad-1-237-37-135.jp.ngrok.io/';
// const URL = process.env.REACT_APP_API_URL
// ${API_URL}
axios.defaults.withCredentials = true;

//회원가입 요청
const register = async userData => {
  const response = await axios({
    url: `${URL}members`,
    method: 'post',
    data: userData,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(response.data);
  }
  return response.data;
};

//로그인 요청
const login = async userData => {
  // const response = await axios.post(`members/login`, userData);
  const response = await axios({
    url: `${URL}members/login`,
    method: 'post',
    data: userData,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // authorization: `Bearer ${accessToken}`,
    },
  });
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
    console.log(response.authorization);
    console.log(response.headers.get('authorizaion'));
    console.log(response.headers);
  }
  return response.data;
};

//로그아웃 요청
const logout = async () => {
  // const response = await axios.delete(`members`);
  // // const response = await axios.post(`members/logout`);
  // if (response.data) {
  localStorage.removeItem('user');
  // }
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
