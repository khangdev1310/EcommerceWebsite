import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../features/Category/CategorySlice'
import productReducer from '../features/Product/ProductSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit'
import createOidcMiddleware from "redux-oidc";
import { reducer as oidc } from "redux-oidc";
import userManager from '../untils/userManager'
import userReducer from '../features/User/userSlice'



export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    user: userReducer,
    oidc: oidc,

  },
  middleware: [...getDefaultMiddleware({
    serializableCheck: false
  }), (createOidcMiddleware(userManager))]
})
