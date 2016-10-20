import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from "react-redux";

import configureStore from "./configure-store";
import Header from './components/Header';
import Intro from './components/Intro';
import Form from './components/Form';
import { getRequest, getRecommendedResult } from './selectors';
import { RequestKeys } from './constants';
import Results from './components/Results';

const store = configureStore();

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

class AppComponent extends Component {
  render () {
    const { request, result } = this.props;
    return (
      <div>
        <Header />
        {request.done && result ? <Results /> : <Form />}
      </div>
    )
  }
}

const App = connect((state) => ({
  request: getRequest(RequestKeys.FETCH_RESULTS)(state),
  result: getRecommendedResult(state),
}), {})(AppComponent)

ReactDOM.render(<AppContainer />, document.getElementById('App'));
