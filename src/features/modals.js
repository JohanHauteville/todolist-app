
import { createSlice } from "@reduxjs/toolkit";


const { actions, reducer } = createSlice({
    name:'modals',
    initialState: {
        modalAddTask: false,
        modalDeleteTask: false,
        modalModifyTask:false,
    },
    reducers:{
        toggleAdd: (state)=> {
             state.modalAddTask = !state.modalAddTask
        },
    }
})

export const { toggleAdd } = actions
export default reducer

