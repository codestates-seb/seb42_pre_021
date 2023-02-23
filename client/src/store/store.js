import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/authSlice';
// import userReducer from 'features/userSlice';
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
// redux state를 storage에 저장할 때 사용하는 redux-persist
const persistConfig = {
  timeout: 1000,
  //key: 어느 지점부터 데이터를 저장할 것인가를 결정
  key: 'root',
  // localStorage에 저장.
  storage,
  whitelist: ['auth'],
  //whitelist : persist 지속시킬 모듈을 설정.
};

const reducer = combineReducers({
  // user: userReducer,
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
