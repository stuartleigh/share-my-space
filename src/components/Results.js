import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getResults } from '../selectors';

import Result from './Result';

export class Results extends Component {
  render () {
    const { recommendedResult, alternativeResults} = this.props;
    const alternatives = alternativeResults.map((result) => <Result type={result.type} value={result.value} key={result.type} />)
    return (
      <div className='container'>
        <h3 className='results-text'>{'Recommended:'}</h3>
        <Result type={recommendedResult.type} value={recommendedResult.value} />
        <div className='horizontal-separator' />
        <h3 className='results-text'>{'Alternatives:'}</h3>
        {alternatives}
      </div>
    )
  }
}

export default connect((state) => ({
  recommendedResult: getRecommendedResults(state),
  alternativeResults: getAlternativeResults(state),
}), {})(Results)
