import { Actions, RequestKeys } from './constants';

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

export const fetchResults = () => dispatch => {
  dispatch(requestData(RequestKeys.FETCH_RESULTS))
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    //.then(result => dispatch(receiveData(RequestKeys.FETCH_RESULTS, {result})))
    //.catch(error => dispatch(requestError(RequestKeys.FETCH_RESULTS, {error})))
}
