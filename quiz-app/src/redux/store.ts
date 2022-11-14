import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import questionReducer from "./slices/questionSlice";
import userReducer from "./slices/userSlice";
import answerReducer from "./slices/answerSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    question: questionReducer,
    answer: answerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
