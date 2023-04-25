import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./redux/movieSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
