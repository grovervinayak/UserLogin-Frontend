import {ACTION_CONSTANTS}
 from "../Utils/Constants";
import axios from "axios";

var port = "http://localhost:3000";
export function postUserSignup(userData) {
  return {
    type: ACTION_CONSTANTS.POST_USER_SIGNUP,
    payload: axios.post(port+"/api/v1/usersignup", userData)
  }
}

export function postUserLogin(userData) {
    return {
      type: ACTION_CONSTANTS.POST_USER_LOGIN,
      payload: axios.post(port+"/api/v1/userlogin", userData)
    }
  }

export function hideMessageBars() {
    return {
        type: ACTION_CONSTANTS.HIDE_MESSAGE_BARS
    }
}

export function redirectFalse() {
    return {
        type: ACTION_CONSTANTS.REDIRECT_FALSE
    }
}