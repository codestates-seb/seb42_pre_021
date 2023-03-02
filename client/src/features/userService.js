import customAxios from 'api/baseURL';

const userInfo = async id => {
  const res = await customAxios.get(`/members/${id}`);
  return res.data;
};

const users = async data => {
  const res = await customAxios.get(
    `/members?size=${data.size}&page=${data.page}&sortBy=${data.sortBy}&sortDir=${data.sortDir}`
  );
  return res.data.data.map(item => {
    if (item.profile.includes('source.boringavatars.com/beam')) {
      return Object.assign({}, item, {
        profile: item.profile + '/' + item.memberId,
      });
    }
    return item;
  });
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
