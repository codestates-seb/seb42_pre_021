import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

const name = 'userinfo';

const initialState = {
  userinfo: {
    nikename: '',
    location: '',
    title: '',
    content: '',
  },
  isLoading: false,
  error: null,
};

export const getUser = createAsyncThunk('user/getUser', async (id, thunkAPI) => {
  try {
    return await userService.userInfo(id);
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const patchUser = createAsyncThunk('user/editUser', async (editData, thunkAPI) => {
  try {
    return await userService.userInfoEdit(editData.data, editData.id);
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (id, thunkAPI) => {
  try {
    return await userService.userDelete(id);
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const userSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userinfo = action.payload;
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(patchUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(patchUser.fulfilled, (state, action) => {
        state.userinfo = action.payload;
        state.isLoading = false;
      })
      .addCase(patchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.fulfilled, state => {
        state.userinfo = null;
      });
  },
});

export default userSlice.reducer;
