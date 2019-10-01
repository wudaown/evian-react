import * as actionTypes from "./actionTypes";

const defaultState = {
  username: "heng0181",
  password: "",
  message: "",
  error: false
};

export default (state = defaultState, action) => {
  var stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.HANDLE_INPUT_UPDATE:
      stateCopy[action.name] = action.value;
      return stateCopy;
    default:
      return state;
  }
};
