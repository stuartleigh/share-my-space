import { Record } from 'immutable';

import { RequestStatus } from '../constants';

export default class RequestRecord extends Record({
  error: undefined,
  status: undefined,
}) {
  get done () {
    return this.status === RequestStatus.DONE;
  }

  get failed () {
    return this.status === RequestStatus.FAILED;
  }

  get started () {
    return this.status === RequestStatus.STARTED;
  }
}
