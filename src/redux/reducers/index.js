import { combineReducers } from 'redux';
import userReducer from './userReducer';
import socketReducer from './socketReducer';
import messagesReducer from './messagesReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  userReducer, socketReducer, messagesReducer, appReducer,
});

export default rootReducer;
