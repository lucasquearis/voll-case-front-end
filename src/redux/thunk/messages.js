import axios from 'axios';
import latestThirty from '../../functions/latestThirty';
import { actionError, actionLoading } from '../actions/app';
import { actionMessages } from '../actions/socket';

const messages = () => async (dispatch) => {
  try {
    dispatch(actionLoading(true));
    const response = await axios.get('https://lucasquearis-voll-solutions.herokuapp.com/messages');
    dispatch(actionMessages(latestThirty(response.data)));
    dispatch(actionLoading(false));
  } catch (error) {
    dispatch(actionError(error.response.statusText));
  }
};

export default messages;
