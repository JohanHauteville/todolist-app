
import { createSlice } from "@reduxjs/toolkit";


const { actions, reducer } = createSlice({
    name:'tasks',
    initialState: [],
    reducers:{
        add: (state,action) => {
            const id = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2).substring(0, 6)
            const newTask = {id:id, ...action.payload, isFinished: false}
            state.push(newTask)
        },
        toggle: (state,action)=> {
            const taskindex = state.findIndex((task)=>task.id===action.payload)
             state[taskindex].isFinished = !state[taskindex].isFinished
        },
        deleteTask: (state,action)=> {
            const taskindex = state.findIndex((task)=>task.id===action.payload)
            state.splice(taskindex,1)
       },
       modifyTask: (state,action) => {
            const taskindex = state.findIndex((task)=>task.id===action.payload.id)
            
            state[taskindex] = { ...state[taskindex],
                                title: action.payload.title,
                                description: action.payload.description,
                                tag:action.payload.tag,
                                isFinished: false
                            }
       }
    }
})

export const { add, toggle, deleteTask, modifyTask} = actions
export default reducer

