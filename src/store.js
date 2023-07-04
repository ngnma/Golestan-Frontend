import { createStore } from 'redux';

import * as action from './action';

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
    case 'I2TOI5NEW':
      return {
        ...state,
        I2TOI5NEW: action.payload.flag,
        I2TOI5NAME: action.payload.first_name,
        I2TOI5LASTNAME: action.payload.last_name,
        I2TOI5ID: action.payload.id,
        I2TOI5NATIONALCODE: action.payload.national_code,
        I2TOI5FACULTY: action.payload.faculty,
        I2TOI5MAJOR: action.payload.major,
        I2TOI5PROFFESOR: action.payload.peroffesor,
        I2TOI5ENTRYYEAR: action.payload.entry_year
        // I2TOI5COURSES:
      }
    case 'I3TOI9NEW':
      return {
        ...state,
        I3TOI9NEW: action.payload.flag,
        I3TOI9NAME: action.payload.first_name,
        I3TOI9LASTNAME: action.payload.last_name,
        I3TOI9ID: action.payload.id,
        I3TOI9FACULTY: action.payload.faculty,
        I3TOI9MAJOR: action.payload.major,
        I3TOI9LEVEL: action.payload.level,
        I3TOI9ERNTRYYEAR: action.payload.entry_year,
        I3TOI9NATIONALCODE: action.payload.national_code
      }
    case 'I4TOI8NEW':
      return {
        ...state,
        I4TOI8NEW: action.payload.flag,
        I4TOI8NAME: action.payload.first_name,
        I4TOI8LASTNAME: action.payload.last_name,
        I4TOI8ID: action.payload.id,
        I4TOI8FACULTY: action.payload.faculty,
        I4TOI8MAJOR: action.payload.major,
        I4TOI8LEVEL: action.payload.level,
        I4TOI8ERNTRYYEAR: action.payload.entry_year,
        I4TOI8NATIONALCODE: action.payload.national_code
      }
    case 'LASTTERM':
      return {
        ...state,
        lastterm: action.payload,
      };
    case 'LASTCOURS':
      return {
        ...state,
        lastcourse: action.payload,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

export default store;