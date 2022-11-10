import { configureStore } from "@reduxjs/toolkit";
import { heroesApiSlice } from "./heroesApiSlice";

const store = configureStore({
  reducer: {
    heroes: heroesApiSlice,
    [heroesApiSlice.reducerPath]: heroesApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(heroesApiSlice.middleware),
});

export default store;