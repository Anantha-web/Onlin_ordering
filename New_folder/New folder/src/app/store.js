import {configureStore} from '@reduxjs/toolkit'
import  userReducer  from '../features/userSlice'
import searchReducer from '../features/SearchSlice'
import cartReducer from '../features/cartSlice'
export const store = configureStore({
    reducer:{
            user:userReducer,
            food:searchReducer,
            cart:cartReducer

    }
})