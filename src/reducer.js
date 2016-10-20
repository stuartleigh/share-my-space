import { Actions, RequestKeys, RequestStatus } from './constants';
import RequestRecord from './records/RequestRecord';


export default (state, action) => {
  switch (action.type) {
  case Actions.REQUEST_DATA:
    return state.setIn(['requests', action.requestKey], new RequestRecord({status: RequestStatus.STARTED}));

  case Actions.REQUEST_ERROR:
    return state.setIn(['requests', action.requestKey], new RequestRecord({status: RequestStatus.FAILED, error: action.data.error}));

  case Actions.RECEIVE_DATA:
    return state.withMutations(s => {
      s.setIn(['requests', action.requestKey], new RequestRecord({status: RequestStatus.DONE}));

      switch (action.requestKey) {
      case RequestKeys.FETCH_USERS:
        break;
      }
    });

  default:
    return state;

  }
};
