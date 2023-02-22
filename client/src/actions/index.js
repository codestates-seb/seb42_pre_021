export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const QUESTION_DETAIL = 'QUESTION_DETAIL';

export const loginAction = data => {
  //userStatus : true, userId: userId, displayName : name
  const payload = {
    userStatus: true,
    ...data,
  };
  return {
    type: LOG_IN,
    payload,
  };
};

export const logoutAction = () => {
  const payload = {
    userStatus: false,
  };
  return {
    type: LOG_OUT,
    payload,
  };
};

export const signupAction = () => {
  return {
    type: SIGN_UP,
  };
};

export const questionDetailAction = res => {
  return {
    type: QUESTION_DETAIL,
    payload: res,
  };
};
