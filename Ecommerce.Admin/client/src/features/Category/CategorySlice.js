import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosClient from '../../untils/axiosClient'
import { SweetAlert } from '../../untils/SweetAlert'

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
      console.log(values);
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
      state.error = action.error;
    },
    [AsyncCreateCategories.pending]: (state, action) => {
      state.loading = true
    },
    [AsyncCreateCategories.fulfilled]: (state, action) => {
      state.loading = false;
      SweetAlert('success', 'Thêm danh mục thành công', 1500)
    },
    [AsyncCreateCategories.rejected]: (state, action) => {
      state.error = action.error;
      SweetAlert('error', 'Thêm danh mục thất bại', 1000)
    },
  },
})

export default categorySlice.reducer;
