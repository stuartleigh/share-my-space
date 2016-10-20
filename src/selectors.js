import RequestRecord from './records/RequestRecord';

export const getRequest = key => state => state.getIn(['requests', key], new RequestRecord());
