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
        termname: action.payload,
      };
    case 'SAVETERMID':
        return {
          ...state,
          termid: action.payload,
        };
    case 'SAVECOURSEID':
      return {
        ...state,
        m7_courseid: action.payload,
      };
    case 'SAVECOURSEFULLNAME':
        return {
          ...state,
          m7_coursefullname: action.payload,
        };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

export default store;