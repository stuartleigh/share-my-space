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

export const fetchResults = ({size, postCode}) => dispatch => {
  dispatch(requestData(RequestKeys.FETCH_RESULTS))
  fetch(`http://localhost:8000/api/suggestions?postcode=${postCode}&sqft=${size}`)
    .then(response => response.json())
    .then(result => {
      if (result.success || true) {
        dispatch(receiveData(RequestKeys.FETCH_RESULTS, {data: result.data}))
      } else {
        dispatch(requestError(RequestKeys.FETCH_RESULTS, {error: "error fetching results"}))
      }
    })
    .catch(error => dispatch(requestError(RequestKeys.FETCH_RESULTS, {error})))
}
