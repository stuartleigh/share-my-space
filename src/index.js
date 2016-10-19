import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import configureStore from "./configure-store";
import HelloWorld from './components/HelloWorld';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HelloWorld />
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('App'));
