import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks'
import modalsReducer from '../features/modals'



const store = configureStore({
    reducer:{
        task: taskReducer,
        modals: modalsReducer
    }
})

export default store