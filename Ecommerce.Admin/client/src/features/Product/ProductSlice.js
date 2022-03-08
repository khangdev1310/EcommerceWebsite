import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteObject } from 'firebase/storage'
import axiosClient from '../../untils/axiosClient'
import { storage } from '../../untils/firebase'

const initialState = {
  products: [],
  product: null,
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  loading: false,
  error: null,
}

export const getAllProductsAsync = createAsyncThunk(
  'products/getAllproducts',
  async (values, { rejectWithValue }) => {
    try {
    
      const response = await axiosClient.get(`/product/find`, null, {
        params: {
          page: values.currentPage,
          limit: values.limit,
        },
      })
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)
export const createProductAsync = createAsyncThunk(
  'products/createProduct',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post(`/product`, values)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProductsAsync.pending]: (state, action) => {
      state.loading = true
    },
    [getAllProductsAsync.fulfilled]: (state, action) => {
      state.loading = false
      state.currentPage = action.payload.currentPage
      state.totalPages = action.payload.totalPages
      state.totalItems = action.payload.totalItems
      state.products = action.payload.items
    },
    [getAllProductsAsync.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error
    },
  },
})

export default productSlice.reducer;
