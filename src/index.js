import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from "react-redux";

import configureStore from "./configure-store";
import Header from './components/Header';
import Intro from './components/Intro';
import Form from './components/Form';
import { getRequest } from './selectors';
import { RequestKeys } from './constants';
import Result from './components/Result';

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
    const { request } = this.props;
    return (
      <div>
        <Header />
        {request.done ? <Result /> : <Form />}
      </div>
    )
  }
}

const App = connect((state) => ({
  request: getRequest(RequestKeys.FETCH_RESULTS)(state),
}), {})(AppComponent)

ReactDOM.render(<AppContainer />, document.getElementById('App'));
