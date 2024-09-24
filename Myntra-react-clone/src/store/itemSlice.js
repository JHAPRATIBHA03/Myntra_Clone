import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, acion) => {
      console.log("reducers", state, acion);
      return acion.payload;
    },
  },
});

export const itemsActions = itemSlice.actions;
export default itemSlice;
