import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosClient from '../../untils/axiosClient'

const initialState = {
  categories: [],
  loading: null,
  error: null,
}


export const AsyncGetAllCategories = createAsyncThunk(
  'category/getAllcategories',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get('category')
      console.log(response)
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const AsyncCreateCategories = createAsyncThunk(
  'category/Createcategory',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post('category', values)
      console.log(response);
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)


const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducer: {},
  extraReducers: {
    [AsyncGetAllCategories.pending]: (state, action) => {
      state.loading = true
    },
    [AsyncGetAllCategories.fulfilled]: (state, action) => {
      state.categories = action.payload.data
    },
    [AsyncGetAllCategories.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [AsyncCreateCategories.pending]: (state, action) => {
      state.loading = true
    },
    [AsyncCreateCategories.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [AsyncCreateCategories.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
})

export default categorySlice.reducer;
