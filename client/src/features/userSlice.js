import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null, //초기값 유저로그인 안함
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
//엑션 export
export const selectUser = state => state.user.user;
//전역상태 export
export default userSlice.reducer;
//저장에담긴 reducer를 export하기위한  export
