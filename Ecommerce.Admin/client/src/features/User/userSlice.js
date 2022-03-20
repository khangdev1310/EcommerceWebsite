import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteObject, ref } from 'firebase/storage'
import axiosClient from '../../untils/axiosClient'
import { storage } from '../../untils/firebase'
import exactFirebaseLink from '../../untils/getFirebaseLink'
import { SweetAlert } from '../../untils/SweetAlert'

const initialState = {
    users: [],
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    loading: false
  };

  export const getAllUsersAsync = createAsyncThunk(
    "users/getAllUsers",
    async (values, { rejectWithValue }) => {
      try {
        
        const response = await axiosClient.get(`/user/find`,null,{
            params: {
                page: values.currentPage,
                limit: values.limit,
            }
        });
        console.log(response);
        return response;
      } catch (error) {
          console.log(error.response);
        return rejectWithValue(error.response);
      }
    }
  );

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getAllUsersAsync.pending]: (state, action) => {
        state.loading = true;
    },
    [getAllUsersAsync.fulfilled]: (state, action) => {
        state.users = action.payload.items["$values"];
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.totalItems = action.payload.totalItems;
        state.loading = false
    },
    [getAllUsersAsync.rejected]: (state, action) => {
        state.loading = false;
    }
  },
})

export default userSlice.reducer
