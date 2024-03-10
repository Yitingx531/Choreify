import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  id: 0,
  username: "",
  password: ""
}];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
export const { addNewUser } = usersSlice.actions;