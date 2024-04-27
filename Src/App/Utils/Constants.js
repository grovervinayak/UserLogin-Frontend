import {getCorrectConstant} from '../Core/ActionConstants';

export const ACTION_CONSTANTS = {
	POST_USER_SIGNUP: "POST_USER_SIGNUP",
    POST_USER_LOGIN: "POST_USER_LOGIN",
    HIDE_MESSAGE_BARS: "HIDE_MESSAGE_BARS",
    REDIRECT_FALSE: "REDIRECT_FALSE"
};

export const POST_USER_SIGNUP = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.POST_USER_SIGNUP, type)
};

export const POST_USER_LOGIN = (type) => {
    return getCorrectConstant(ACTION_CONSTANTS.POST_USER_LOGIN, type)
  };
