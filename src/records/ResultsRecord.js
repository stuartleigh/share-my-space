import { Record } from 'immutable';

import { RequestStatus } from '../constants';

export default class RequestRecord extends Record({
  airbb: undefined,
  appearHere: undefined,
  coworking: undefined,
}) {
  get recommended () {
    return {
      type: 'airbb',
      value: 4233,
    }
  }

  get alternatives () {
    return [
      {
        type: 'coworking',
        value: 2766,
      },
      {
        type: 'appearHere',
        value: 1233,
      }
    ]
  }

  get hasResult () {
    return this.airbb && this.appearHere && this.coworking;
  }
}
