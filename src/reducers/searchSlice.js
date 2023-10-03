import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "New York",
  reducers: {
    setSearchTerm: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
