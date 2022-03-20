import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteObject, ref } from 'firebase/storage'
import axiosClient from '../../untils/axiosClient'
import { storage } from '../../untils/firebase'
import exactFirebaseLink from '../../untils/getFirebaseLink'
import { SweetAlert } from '../../untils/SweetAlert'

const initialState = {
  products: [],
  product: null,
  productDeleteTemp: null,
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

      
      return response
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
      return response
    } catch (error) {
      return rejectWithValue(error.response)
    }
  },
)

// Delete Product
export const deleteProductAsync = createAsyncThunk(
  'products/deleteProduct',
  async (values, { rejectWithValue }) => {
    try {
      console.log(values);
      const response = await axiosClient.delete(`/product/${values.id}`)
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setDeleteProduct: (state, action) => {
      console.log(action);
      state.productDeleteTemp = action.payload
    },
  },
  extraReducers: {
    [getAllProductsAsync.pending]: (state, action) => {
      state.loading = true
    },
    [getAllProductsAsync.fulfilled]: (state, action) => {
      
      state.loading = false
      state.currentPage = action.payload.currentPage
      state.totalPages = action.payload.totalPages
      state.totalItems = action.payload.totalItems
      state.products = action.payload.items["$values"]
    },
    [getAllProductsAsync.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error
    },
    [createProductAsync.pending]: (state, action) => {
      state.loading = true
    },
    [createProductAsync.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false
      state.products.push(action.payload);
      SweetAlert('success', 'Thêm sản phẩm thành công', 1500)
    },
    [createProductAsync.rejected]: (state, action) => {
      state.loading = false
      SweetAlert('error', 'Thêm sản phẩm thất bại! Vui lòng thử lại', 1000)
    },
    [deleteProductAsync.pending]: (state, action) => {
      state.loading = true
    },
    [deleteProductAsync.fulfilled]: (state, action) => {
      state.loading = false
      console.log(state.productDeleteTemp);
      state.products = state.products.filter(
        (p) => p.id !== state.productDeleteTemp.id,
      )

      SweetAlert('success', 'Xóa sản phẩm thành công', 1500)

      const deletePromise = []
      state.productDeleteTemp.productImages["$values"].forEach((image) => {
        const beforeLink = exactFirebaseLink(image.imageUrl)
        if (beforeLink !== null) {
          const desertRef = ref(storage, beforeLink)
          deletePromise.push(deleteObject(desertRef))
        }
      })

      // Async delete
      Promise.all(deletePromise)
        .then(() => {
          console.log('Success delete product')
        })
        .catch((error) => {
          console.log(error)
        })

      state.productDeleteTemp = null
    },
    [deleteProductAsync.rejected]: (state) => {
      state.loading = false
      SweetAlert('error', 'Xóa sản phẩm thất bại', 1000)
    },
  },
})

export const { setDeleteProduct } = productSlice.actions
export default productSlice.reducer
