// reducers/contactReducer.js

import { SEND_MESSAGE } from "./actions";

const initialState = {
  messages: [], // Initial state for storing messages
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default contactReducer;
