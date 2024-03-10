import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isClicked: false
  },
  reducers: {
      createUser: (state, action) => {
      state.isClicked = true;
    }
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = usersSlice;
export const { createUser } = actions;
// Export the reducer, either as a default or named export
export default reducer;