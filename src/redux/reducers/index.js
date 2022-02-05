import { combineReducers } from 'redux';
import userReducer from './userReducer';
import socketReducer from './socketReducer';

const rootReducer = combineReducers({ userReducer, socketReducer });

export default rootReducer;
