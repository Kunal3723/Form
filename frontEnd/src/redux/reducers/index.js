import { combineReducers } from "redux";
import authReducers from "./auth";
import checkReducers from "./check";
import { infoReducer } from "./Info";
export const reducers = combineReducers({ auth: authReducers, check: checkReducers,info:infoReducer });