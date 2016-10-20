import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import configureStore from "./configure-store";
import Header from './components/Header';
import Intro from './components/Intro';
import Form from './components/Form';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Form />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('App'));
