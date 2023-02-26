import axios from 'axios';

// const URL = 'https://975c-59-10-231-15.jp.ngrok.io/';
const URL = 'http://localhost:3001/';
// const URL = 'https://d1ad-1-237-37-135.jp.ngrok.io/';
// const URL = process.env.REACT_APP_API_URL

// info 요청
// `${URL}members?memberId=${id}`

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const userInfo = async id => {
  const res = await axios({
    url: `${URL}members/${id}`,
    method: 'get',
    withCredentials: true,
  });

  return res.data;
};

// info edit 요청
const userInfoEdit = async (userData, id) => {
  // 넘어오기는 잘 넘어옴
  console.log(userData, id);
  const res = await axios({
    url: `${URL}members/${id}`, // `${URL}members?memberId=${id}`
    method: 'patch',
    data: userData,
    withCredentials: true,
  });
  return res.data;
};

// 회원 삭제 요청
const userDelete = async id => {
  await axios({
    url: `${URL}members/${id}`, // `${URL}members?memberId=${id}`
    method: 'delete',
    withCredentials: true,
  });
  localStorage.clear();
};

const userService = {
  userInfo,
  userInfoEdit,
  userDelete,
};

export default userService;
