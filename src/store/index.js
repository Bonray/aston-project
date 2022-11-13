import { configureStore } from "@reduxjs/toolkit";
import heroesApiSlice from "./heroesApiSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    heroes: heroesApiSlice,
    user: userReducer,
    [heroesApiSlice.reducerPath]: heroesApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(heroesApiSlice.middleware),
});

export default store;