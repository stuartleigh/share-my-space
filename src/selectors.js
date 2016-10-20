import RequestRecord from './records/RequestRecord';
import ResultsRecord from './records/ResultsRecord';

export const getRequest = key => state => state.getIn(['requests', key], new RequestRecord());

export const getRecommendedResults = state => {
  const result = state.get('results', new ResultsRecord());
  result.hasResult && result.recommended;
}

export const getAlternativeResults = state => {
  const result = state.get('results', new ResultsRecord());
  return result.hasResult && result.alternatives;
}
