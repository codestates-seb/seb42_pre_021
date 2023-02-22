import { createStore } from 'redux';
import persistReducer from 'reducers';

const store = createStore(persistReducer);

export default store;
