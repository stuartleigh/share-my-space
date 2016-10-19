import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { Map } from 'immutable';

import rootReducer from "./reducer";

const loggerMiddleware = createLogger({
  stateTransformer: state => state.toJS(),
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

const configureStore = (initialState = Map()) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;
