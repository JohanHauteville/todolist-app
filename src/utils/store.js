import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks";
import modalsReducer from "../features/modals";
import themeReducer from "../features/theme";
import connectReducer from "../features/connect";

const store = configureStore({
  reducer: {
    task: taskReducer,
    modals: modalsReducer,
    connect: connectReducer,
    theme: themeReducer,
  },
});

export default store;
