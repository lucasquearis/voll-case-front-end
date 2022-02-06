export const SOCKET = 'SOCKET';
export const USER_LIST = 'USER_LIST';
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const MESSAGES = 'MESSAGES';
export const TYPING = 'TYPING';

export const actionUserList = (state) => ({ type: USER_LIST, state });

export const actionNewMessage = (state) => ({ type: NEW_MESSAGE, state });

export const actionMessages = (state) => ({ type: MESSAGES, state });

export const actionTyping = (state) => ({ type: TYPING, state });
