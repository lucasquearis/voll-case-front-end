import { combineReducers } from 'redux';
import userReducer from './userReducer';
import socketReducer from './socketReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({ userReducer, socketReducer, messagesReducer });

export default rootReducer;
