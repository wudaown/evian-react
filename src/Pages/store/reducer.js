import * as actionTypes from "./actionTypes";
import {
  STAFF,
  COURSES,
  ATTENDANCE,
  LAB_STATS,
  TUT_STATS
} from "../../utils/constants";

// const defaultState = {
//   courses: [],
//   domain: "",
//   attendance: [],
//   labStats: []
//   tutStats: []
// };

const defaultState = {
  courses: COURSES,
  domain: STAFF,
  attendance: ATTENDANCE,
  labStats: LAB_STATS,
  tutStats: TUT_STATS
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
