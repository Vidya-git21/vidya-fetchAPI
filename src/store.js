import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./assets/postSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
