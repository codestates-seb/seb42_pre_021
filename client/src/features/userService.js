import customAxios from 'api/baseURL';

// `${URL}members?memberId=${id}`

const userInfo = async id => {
  const res = await customAxios.get(`/members/${id}`);
  return res.data;
};

const users = async () => {
  const res = await customAxios.get(`/members`);
  return res.data;
};

const userInfoEdit = async (data, id) => {
  const res = await customAxios.patch(`/members/${id}`, data);
  return res.data;
};

const userDelete = async id => {
  await customAxios.delete(`/members/${id}`);
  localStorage.clear();
  window.location.replace('/');
};

const userService = {
  userInfo,
  users,
  userInfoEdit,
  userDelete,
};

export default userService;
