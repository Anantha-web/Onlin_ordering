import {createSlice} from '@reduxjs/toolkit'

const cart = createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        cartItems:(state,action)=>{
            state.cart.push(action.payload)
        }
    }
})
export const {cartItems } = cart.actions;
export const cartInfo = (state)=>state.cart.item;
export default cart.reducer;