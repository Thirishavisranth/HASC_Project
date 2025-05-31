// actions/contactActions.js

export const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessage = (formData) => {
  return {
    type: SEND_MESSAGE,
    payload: formData,
  };
};
