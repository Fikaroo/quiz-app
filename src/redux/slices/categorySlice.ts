import { createSlice } from "@reduxjs/toolkit";

interface Init {
  categories: category[];
}

type category = {
  id: number;
  name: string;
  description: string;
  image: string;
  questionId: number;
};

const initialState: Init = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push({
        id: 3,
        name: "test",
        description: "test",
        image: "test",
        questionId: 3,
      });
    },
  },
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;
