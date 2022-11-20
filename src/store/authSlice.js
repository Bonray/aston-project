import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state) {
      state.isAuth = true;
    },
    removeAuth(state) {
      state.isAuth = false;
    }
  },
});

export const { setAuth, removeAuth } = userSlice.actions;

export default userSlice.reducer;