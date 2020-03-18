// import { combineReducers } from 'redux';
import { SET_USERNAME } from '../actions/setUsername.js';

const initialState = {
  username: undefined
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return Object.assign({}, state, {
        username: action.username
      });
    default:
      return state;
  }
};

// const allReducers = combineReducers({ reducers });

export default reducers;
