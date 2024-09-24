import { createSlice } from "@reduxjs/toolkit";
/*
const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, //false:pending ,true:done
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markFetchingStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchFinished: (state) => {
      return (state.currentlyFetching = false);
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
*/

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    currentlyFetching: false,
    fetchDone: false,
  },
  reducers: {
    markFetchingStarted(state) {
      state.currentlyFetching = true;
    },
    markFetchDone(state) {
      state.currentlyFetching = false;
      state.fetchDone = true;
    },
    // You might also want an error state if you add error handling
    markFetchFailed(state) {
      state.currentlyFetching = false;
      state.fetchDone = false;
    },
  },
});
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
