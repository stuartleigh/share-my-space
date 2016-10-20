import React, { Component } from 'react';

import Result from './Result';

export default class Results extends Component {
  render () {
    return (
      <div className='container'>
        <h3 className='results-text'>{'Recommended:'}</h3>
        <Result />
        <div className='horizontal-separator' />
        <h3 className='results-text'>{'Alternatives:'}</h3>
        <Result />
        <Result />
      </div>
    )
  }
}
