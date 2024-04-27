import {applyMiddleware, createStore,combineReducers} from "redux";
import {logger} from "redux-logger"
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {reducer as formReducer} from 'redux-form';
import userSignupReducer from "./Reducers/UserSignupReducer";

const middleware = applyMiddleware(promise, thunk, logger);

let combinedReducer = combineReducers({
	userSignupReducer,
    form: formReducer
});

export default createStore(combinedReducer, middleware)