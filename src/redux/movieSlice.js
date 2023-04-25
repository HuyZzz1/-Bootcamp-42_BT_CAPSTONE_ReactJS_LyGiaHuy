import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSeatSelected: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    booking: (state, action) => {
      const listSeatSelected = [...state.listSeatSelected];
      const index = listSeatSelected.findIndex(
        (seat) => seat.maGhe === action.payload.maGhe
      );

      if (index !== -1) {
        listSeatSelected.splice(index, 1);
      } else {
        listSeatSelected.push(action.payload);
      }

      return { ...state, listSeatSelected: listSeatSelected };
    },
    resetBooking: (state) => {
      return { ...state, listSeatSelected: [] };
    },
  },
});

export const { booking, resetBooking } = movieSlice.actions;

export default movieSlice.reducer;
