import { createSlice } from "@reduxjs/toolkit";

interface Init {
  answers: answerProps[];
}

type answerProps = {
  id: number;
  answer: boolean;
};

const initialState: Init = { answers: [] };

const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
  },
});

export const { addAnswer } = answerSlice.actions;
export default answerSlice.reducer;
