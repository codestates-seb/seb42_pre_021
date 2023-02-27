import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

const name = 'users';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const getUsers = createAsyncThunk('users/getUsers', async (data, thunkAPI) => {
  try {
    return await userService.users(data);
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const usersSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
