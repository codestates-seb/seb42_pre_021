import axios from 'axios';

// const URL = process.env.REACT_APP_API_URL
// const URL = 'https://7c5f-221-140-143-39.jp.ngrok.io/';
// const URL = 'https://d4b8-59-10-231-15.jp.ngrok.io/';
const URL = 'https://9f1a-59-10-231-15.jp.ngrok.io/';

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
    },
  });

  const { authorization, refresh } = response.data;
  axios.defaults.headers.common['authorization'] = `Bearer ${authorization}`;
  axios.defaults.headers.common['refresh'] = `Bearer ${refresh}`;

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

//로그아웃 요청
const logout = async () => {
  // const response = await axios.delete(`members`);
  // // const response = await axios.post(`members/logout`);
  // if (response.data) {
  localStorage.removeItem('user');
  window.location.replace('/');
  // }
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
