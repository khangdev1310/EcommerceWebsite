import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosClient from '../../untils/axiosClient'
import { SweetAlert } from '../../untils/SweetAlert'
import exactFirebaseLink from '../../untils/getFirebaseLink'
import { ref, deleteObject } from 'firebase/storage'
import { storage } from '../../untils/firebase'
const initialState = {
  categories: [],
  category: null,
  loading: null,
  error: null,
  categoryDeleteTemp: null,
}

export const AsyncGetAllCategories = createAsyncThunk(
  'category/getAllcategories',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get('category')

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const AsyncCreateCategories = createAsyncThunk(
  'category/CreateCategory',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post('category', values)
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const AsyncUpdateCategories = createAsyncThunk(
  'category/UpdateCategory',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axiosClient.put('category', values)
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

export const AsyncDeleteCategories = createAsyncThunk(
  'category/DeleteCategory',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axiosClient.delete(`category/${values.id}`)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  },
)

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setDeleteCategory: (state, action) => {
      state.categoryDeleteTemp = action.payload
    },
    setUpdateCategory: (state, action) => {
      state.category = action.payload
    },
  },
  extraReducers: {
    [AsyncGetAllCategories.pending]: (state, action) => {
      state.loading = true
    },
    [AsyncGetAllCategories.fulfilled]: (state, action) => {
      state.categories = action.payload.data
    },
    [AsyncGetAllCategories.rejected]: (state, action) => {
      state.error = action.error
    },
    [AsyncCreateCategories.pending]: (state, action) => {
      state.loading = true
    },
    [AsyncCreateCategories.fulfilled]: (state, action) => {
      state.loading = false
      SweetAlert('success', 'Thêm danh mục thành công', 1500)
    },
    [AsyncCreateCategories.rejected]: (state, action) => {
      state.error = action.error
      SweetAlert('error', 'Thêm danh mục thất bại', 1000)
    },

    [AsyncUpdateCategories.pending]: (state, action) => {
      state.loading = true
    },
    [AsyncUpdateCategories.fulfilled]: (state, action) => {
      state.loading = false
      const index = state.categories.findIndex(
        (c) => c.id === state.category.id,
      )
      state.categories[index] = state.category
      SweetAlert('success', 'Cập nhật thành công', 1500)
    },
    [AsyncUpdateCategories.rejected]: (state) => {
      state.loading = false

      SweetAlert('error', 'Cập nhật thất bại', 1000)
    },

    [AsyncDeleteCategories.pending]: (state) => {
      state.loading = true
    },
    [AsyncDeleteCategories.fulfilled]: (state, action) => {
      state.loading = false
      state.categories = state.categories.filter(
        (item) => item.id !== state.categoryDeleteTemp.id,
      )

      // Xóa ảnh firebase
      const objLink = exactFirebaseLink(state.categoryDeleteTemp.imageUrl)

      if (objLink) {
        const tempRef = ref(storage, objLink)
        deleteObject(tempRef)
          .then(() => {
            console.log('Deleted firebase file')
          })
          .catch(() => {
            console.log('Delete failed firebase')
          })
      }
      state.categoryDeleteTemp = null

      SweetAlert('success', 'Xóa danh mục thành công', 1500)
    },
    [AsyncDeleteCategories.rejected]: (state, action) => {
      state.error = action.error
      SweetAlert('error', 'Xóa danh mục thất bại', 1000)
    },
  },
})
export const { setDeleteCategory, setUpdateCategory } = categorySlice.actions
export default categorySlice.reducer
