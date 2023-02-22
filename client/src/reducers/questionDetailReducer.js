import { QUESTION_DETAIL } from '../actions';

export const questionDetailReducer = (state = null, action) => {
  switch (action.type) {
    case QUESTION_DETAIL:
      return { ...action.payload };
    default:
      return state;
  }
};
