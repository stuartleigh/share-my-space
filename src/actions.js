import { Actions, RequestKeys } from '../constants';

export const requestData = (requestKey): Object => {
  return {
    type: Actions.REQUEST_DATA,
    requestKey,
  };
};

export const receiveData = (requestKey, data: Object): Object => {
  return {
    type: Actions.RECEIVE_DATA,
    requestKey,
    data,
  };
};

export const requestError = (requestKey, data: Object): Object => {
  return {
    type: Actions.REQUEST_ERROR,
    requestKey,
    data,
  };
};

export const fetchUsers = () => dispatch => {
  dispatch(requestData(RequestKeys.FETCH_USERS))
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => dispatch(receiveData(RequestKeys.FETCH_USERS, {result})))
    .catch(error => dispatch(requestError(RequestKeys.FETCH_USERS, {error})))
}
