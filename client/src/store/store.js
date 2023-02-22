import { createStore } from 'react-redux';
import persistReducer from 'reducers';

const store = createStore(persistReducer);
