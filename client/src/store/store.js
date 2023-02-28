import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/authSlice';
import userReducer from 'features/userSlice';
import usersReducer from 'features/usersSlice';
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
} from 'redux-persist';

const persistConfig = {
  timeout: 1000,
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const reducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
