import { Record } from 'immutable';

import { RequestStatus } from '../constants';

export default class RequestRecord extends Record({
  airbb: undefined,
  appearHere: undefined,
  coworking: undefined,
}) {

  getRecommendedType () {
    const { airbb, appearHere, coworking } = this;
    if (airbb > appearHere && airbb > coworking) {
      return 'airbb';
    }
    if (appearHere > airbb && appearHere > coworking) {
      return 'appearHere';
    }
    if (coworking > airbb && coworking > appearHere) {
      return 'coworking';
    }
  }

  getAlternativeTypes () {
    const types = ['airbb', 'appearHere', 'coworking']
    return types.filter(t => t !== this.getRecommendedType()).sort((a, b) => this[b] - this[a]);
  }

  get recommended () {
    const type = this.getRecommendedType();
    return {
      type,
      value: this[type],
    }
  }

  get alternatives () {
    return this.getAlternativeTypes().map(t => ({
      type: t,
      value: this[t],
    }))
  }

  get hasResult () {
    return this.airbb || this.appearHere || this.coworking;
  }
}
