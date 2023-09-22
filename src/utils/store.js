import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks'
import modalsReducer from '../features/modals'
import themeReducer from '../features/theme'



const store = configureStore({
    reducer:{
        task: taskReducer,
        modals: modalsReducer,
        theme: themeReducer
    }
})

export default store