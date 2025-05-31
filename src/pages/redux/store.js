// redux/store.js

import { createStore, combineReducers } from "redux";
import contactReducer from "./reducer"; // Import your reducer

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  userProfile: contactReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
