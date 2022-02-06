import { MESSAGES, TYPING } from '../actions/socket';

const INITIAL_STATE = {
  messages: [],
  typing: [],
};

const messageReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case MESSAGES:
      return { ...state, messages: action.state };

    case TYPING:
      return { ...state, typing: [action.state] };
    default:
      return state;
  }
};

export default messageReducer;
