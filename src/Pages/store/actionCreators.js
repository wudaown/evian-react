import * as actionTypes from "./actionTypes";
import { PostLoginAPI, PostAttendanceAPI } from "../../api";
import { ATTENDANCE } from "../../utils/constants";

export const handleInputUpdate = (name, value) => {
  return {
    type: actionTypes.HANDLE_INPUT_UPDATE,
    name,
    value
  };
};

export const loadAttendance = course => {
  return (dispatch, getState) => {
    const state = getState();
    const { username } = state.LoginReducer;
    const { domain } = state.PagesReducer;

    // PostAttendanceAPI({ username, domain, course })
    //   .then(res => {
    //     if (res.state) {
    //       dispatch(handleInputUpdate("attendance", res.attendance));
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    dispatch(handleInputUpdate("attendance", ATTENDANCE));
  };
};
