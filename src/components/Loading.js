import React, { Component } from 'react';

import Spinner from './Spinner'

export default class Loading extends Component {
  render () {
    return (
      <div className="loading">
        <div className="loading__inner">
          <Spinner />
          <h1 className="loading__text">Loading</h1>
        </div>
      </div>
    );
  }
}
