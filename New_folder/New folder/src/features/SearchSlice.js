import {createSlice} from '@reduxjs/toolkit'

const SearchSlice = createSlice({
    name:'search',
    initialState:{
        item:[{
            
        }],
    },
    reducers:{
        SearchItem:(state,action)=>{
            state.item =action.payload;
        }
    }
})
export const {SearchItem} = SearchSlice.actions;
export const SearchTerm = (state)=>state.user.user;
export default SearchSlice.reducer;