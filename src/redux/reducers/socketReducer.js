import socketIOClient from 'socket.io-client';
import { SOCKET, USER_LIST } from '../actions/socket';

const URL = 'http://localhost:3001/';
const socket = socketIOClient(URL);

const INITIAL_STATE = {
  socket,
  userList: [],
};

const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SOCKET:
      return { ...state, socket: action.state };

    case USER_LIST:
      return { ...state, userList: action.state };

    default:
      return state;
  }
};

export default userReducer;
