
// store.js
import { createStore, combineReducers } from 'redux';

const emailReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return action.payload;
    default:
      return state;
  }
};

const passwordReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_PASSWORD':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  email: emailReducer,
  password: passwordReducer,
});

const store = createStore(rootReducer);

export default store;
