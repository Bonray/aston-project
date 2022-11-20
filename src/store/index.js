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
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import loggerMiddleware from "./middlewares/logger";

const rootReducer = combineReducers({
  heroes: heroesApiSlice,
  auth: authSlice,
  user: userSlice,
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
  }).concat(heroesApiSlice.middleware, loggerMiddleware),
});

export const persistor = persistStore(store);
export default store;