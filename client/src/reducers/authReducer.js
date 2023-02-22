import { LOG_IN, LOG_OUT } from '../actions';

const initState = {
  userStatus: false,
};

const authReducer = (state = { ...initState }, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...action.payload };
    case LOG_OUT:
      return { ...action.payload };
    default:
      return state;
  }
};

export default authReducer;
