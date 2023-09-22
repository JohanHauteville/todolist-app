import { createSlice } from "@reduxjs/toolkit";


const {actions, reducer } = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers:{
        toggle: (state) => state === 'light' ? 'dark' : 'light'
    }
        
})


export const {toggle} = actions
export default reducer