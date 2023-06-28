import { createStore } from 'redux';

import * as action from './action' ;

// Define an initial state
const initialState = {
  count: 0,
};

// Define a reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVETERMNAME':
      return {
        ...state,
        m3_termname: action.payload,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

export default store;