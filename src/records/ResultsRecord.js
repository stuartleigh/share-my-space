import { Record } from 'immutable';

import { RequestStatus } from '../constants';

export default class RequestRecord extends Record({
  airbb: undefined,
  appearHere: undefined,
  coworking: undefined,
}) {
  get recommended () {
    debugger;
    return this.status === RequestStatus.DONE;
  }

  get alternatives () {
    return this.status === RequestStatus.FAILED;
  }
}
