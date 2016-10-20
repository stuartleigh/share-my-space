import React, { Component } from 'react';

import Result from './Result';

export default class Results extends Component {
  render () {



    return (
      <div className='container'>
        <h3 className='results-text'>{'Recommended:'}</h3>
        <Result type="airbb" value={4564} />
        <div className='horizontal-separator'></div>
        <h3 className='results-text'>{'Alternatives:'}</h3>
        <Result type="coworking" value={2332} />
        <Result type="appearHere" value={1222} />
      </div>
    )
  }
}
