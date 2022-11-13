import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import questionReducer from "./slices/questionSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    question: questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
