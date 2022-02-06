import axios from 'axios';
import { actionError, actionLoading } from '../actions/app';
import { actionMessages } from '../actions/socket';

const messages = () => async (dispatch) => {
  try {
    dispatch(actionLoading(true));
    const response = await axios.get('http://localhost:3001/messages');
    dispatch(actionMessages(response.data));
    dispatch(actionLoading(false));
  } catch (error) {
    dispatch(actionError(error.response.data.message));
  }
};

export default messages;
