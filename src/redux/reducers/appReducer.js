import { ERROR, LOADING } from '../actions/app';

const INITIAL_STATE = {
  error: false,
  loading: false,
};

const appReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.state };

    case ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export default appReducer;
