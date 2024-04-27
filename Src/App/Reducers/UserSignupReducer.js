import {ACTION_CONSTANTS, POST_USER_SIGNUP, POST_USER_LOGIN}
from "../Utils/Constants";
import {CONSTANT_TYPES} from "../Core/ActionConstants";

export default function reducer(state = {
    user_data: {},
    user_login_data: {},
    signup_error: false,
    signup_success: false,
    login_error: false,
    login_success: false,
    message_bar: {}
}, action){
	switch(action.type){
        case POST_USER_SIGNUP(CONSTANT_TYPES.REJECTED): {
            return {...state, signup_error: true, message_bar: action.payload.response.data }
        }
        case POST_USER_SIGNUP(CONSTANT_TYPES.FULFILLED): {
            return {...state, user_data: action.payload.data, signup_success: true}
        }
        case POST_USER_LOGIN(CONSTANT_TYPES.REJECTED): {
            return {...state, login_error: true, message_bar: action.payload.response.data}
        }
        case POST_USER_LOGIN(CONSTANT_TYPES.FULFILLED): {
            return {...state, user_login_data: action.payload.data, login_success: true}
        }
        case ACTION_CONSTANTS.HIDE_MESSAGE_BARS: {
            return {...state, signup_error: false, login_error: false}
        }
        case ACTION_CONSTANTS.REDIRECT_FALSE: {
            return {...state, signup_success: false, login_success: false}
        }
    }
    return state;
}
