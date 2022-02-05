import { LOGIN } from '../actions/user';

const INITIAL_STATE = {
  userName: '',
};

const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, userName: action.state };
    default:
      return state;
  }
};

export default userReducer;
