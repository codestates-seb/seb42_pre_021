import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import searchQuestion from './searchService';

const name = 'search';

const initialState = {
  searchData: [],
  isLoading: false,
  error: null,
};

export const getSearchList = createAsyncThunk('search/getSearchList', async (data, thunkAPI) => {
  try {
    return await searchQuestion(data);
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const searchSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetSearch: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getSearchList.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getSearchList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
