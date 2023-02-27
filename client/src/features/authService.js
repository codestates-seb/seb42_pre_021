import customAxios from 'api/baseURL';

//회원가입 요청
const register = async userData => {
  const response = await customAxios.post(`/members`, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

//로그인 요청
const login = async userData => {
  const response = await customAxios.post(`/members/login`, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

//로그아웃 요청
const logout = async () => {
  // await customAxios.post(`/members/logout`);
  localStorage.removeItem('user');
  window.location.replace('/');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
