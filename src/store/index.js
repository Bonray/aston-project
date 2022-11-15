import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import heroesApiSlice from "./heroesApiSlice";
import userReducer from "./userSlice";
import favoritesSlice from "./favoritesSlice";

const rootReducer = combineReducers({
  heroes: heroesApiSlice,
  user: userReducer,
  favorites: favoritesSlice,
  [heroesApiSlice.reducerPath]: heroesApiSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(heroesApiSlice.middleware),
});

export const persistor = persistStore(store);
export default store;