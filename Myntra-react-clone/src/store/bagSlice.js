import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, acion) => {
      state.push(acion.payload);
    },
    removeFromBag: (state, acion) => {
      return state.filter((itemId) => itemId !== acion.payload);
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
