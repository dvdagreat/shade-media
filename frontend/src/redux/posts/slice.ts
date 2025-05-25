import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "POSTS_SLICE",
  initialState: {
    value: [
      {
        id: "1", 
        title: "> My first post",
        description: "This is just a dummy description"
      },
      {
        id: "2", 
        title: ">> My second post",
        description: "This is just a dummy description"
      }
    ]
  },
  reducers: {}
})

export const PostReducer = slice.reducer;
