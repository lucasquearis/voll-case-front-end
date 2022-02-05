import axios from 'axios';
import { actionMessages } from '../actions/socket';

const messages = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/messages');
    dispatch(actionMessages(response.data));
  } catch (error) {
    global.console.error(error);
  }
};

export default messages;
