import { createStore, compose } from 'redux';
import allReducers from './reducers';
const devTools = compose(
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);
const store = createStore(allReducers, devTools);

export default store;
