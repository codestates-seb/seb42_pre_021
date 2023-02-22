import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer.js';
import { questionDetailReducer } from './questionDetailReducer';

// redux state를 storage에 저장할 때 사용하는 redux-persist
const persistConfig = {
  key: 'root',
  // localStorage에 저장.
  storage,
  whitelist: ['authReducer'],
  //persist지정할 모듈을 설정.
};

const rootReducer = combineReducers({
  authReducer,
  questionDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);
