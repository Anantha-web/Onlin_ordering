import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:[{
            
        }],
    },
    reducers:{
        addUser:(state,action)=>{
            state.user =action.payload;
        }
    }
})
export const {addUser} = userSlice.actions;
export const userInfo = (state)=>state.user.user;
export default userSlice.reducer;