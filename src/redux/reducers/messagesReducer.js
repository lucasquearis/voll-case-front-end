import { MESSAGES } from '../actions/socket';

const INITIAL_STATE = {
  messages: [],
};

const messageReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case MESSAGES:
      return { ...state, messages: action.state };
    default:
      return state;
  }
};

export default messageReducer;
