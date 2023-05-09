import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSeatSelected: [],
  user: {},
};

export const appSlice = createSlice({
  name: "app",
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
    setUser: (state, action) => {
      return { ...state, user: action.payload };
    },
  },
});

export const { booking, resetBooking, setUser } = appSlice.actions;

export default appSlice.reducer;
