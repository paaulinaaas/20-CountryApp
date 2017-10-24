import { createStore } from 'redux';
import reducers from '../reducers/index';
import { combineReducers } from 'redux';
import DevTools from '../DevTools.js';

const store = createStore(
  reducers,
  DevTools.instrument()
);

export default store;