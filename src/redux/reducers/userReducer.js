import { LOGIN } from '../actions/user';
import { EMPTY } from '../../constants/list';

const INITIAL_STATE = {
  userName: EMPTY,
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
