import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  activeUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      if (action.payload.authType === 'signUp') {
        const newUser = {
          email: action.payload.email,
          id: action.payload.id,
          favorites: [],
          history: []
        }
        state.users.push(newUser);
        state.activeUser = newUser;
      } else if (action.payload.authType === 'signIn') {
        state.activeUser = state.users.find(user => user.id === action.payload.id);
      }
    },
    removeUser(state) {
      state.activeUser = null;
    },
    addFavorite(state, action) {
      const user = state.users.find(user => user.id === state.activeUser.id);
      user.favorites.push(action.payload);
      state.activeUser.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      const user = state.users.find(user => user.id === state.activeUser.id);
      const idx = state.activeUser.favorites.findIndex(item => item.id === +action.payload.id);
      state.activeUser.favorites.splice(idx, 1);
      user.favorites.splice(idx, 1);
    },
    addHistory(state, action) {
      const user = state.users.find(user => user.id === state.activeUser.id);
      user.history.push(action.payload);
      state.activeUser.history.push(action.payload);
    }
  },
});

export const { setUser, removeUser, addFavorite, removeFavorite, addHistory } = userSlice.actions;

export default userSlice.reducer;