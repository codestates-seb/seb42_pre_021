//http 요청을 모아두는 파일 post,patch ...
import axios from 'axios';

const API_URL = 'http://localhost:3001/members/';
//.env에서 가져올 예정

//회원가입 요청
const register = async userData => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

//로그인 요청
const login = async userData => {
  const response = await axios.post(`${API_URL}`, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

//로그아웃 요청
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
