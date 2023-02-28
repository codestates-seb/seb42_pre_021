import customAxios from 'api/baseURL';

const userInfo = async id => {
  const res = await customAxios.get(`/members/${id}`);
  return res.data;
};

const users = async data => {
  const res = await customAxios.get(
    `/members?size=${data.size}&page=${data.page}&sortBy=${data.sortBy}&sortDir=${data.sortDir}`
  );
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
  userDelete,
};

export default userService;
