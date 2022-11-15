import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  email: null,
  token: null,
  id: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.isAuth = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.isAuth = false;
      state.email = null;
      state.token = null;
      state.id = null;
    }
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;