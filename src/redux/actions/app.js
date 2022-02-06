export const ERROR = 'ERROR';

export const LOADING = 'LOADING';

export const actionError = (state) => ({ type: ERROR, state });

export const actionLoading = (state) => ({ type: LOADING, state });
