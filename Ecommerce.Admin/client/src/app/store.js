import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import categoryReducer from '../features/Category/CategorySlice'
import productReducer from '../features/Product/ProductSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
    product: productReducer
  },
  middleware: customizedMiddleware,
})
