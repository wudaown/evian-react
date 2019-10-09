import * as actionTypes from "./actionTypes";
import {
  PostLoginAPI,
  PostAttendanceAPI,
  PostCourstStatsAPI,
  PostSessionAttendanceAPI,
  PostOverwriteAPI
} from "../../api";
import { ATTENDANCE, STUDENT, STAFF } from "../../utils/constants";

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

    if (domain === STUDENT) {
      PostAttendanceAPI({ username, domain, course })
        .then(res => {
          if (res.state) {
            dispatch(handleInputUpdate("attendance", res.attendance));
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else if (domain === STAFF) {
      PostCourstStatsAPI({ username, domain, course })
        .then(res => {
          dispatch(handleInputUpdate("labStats", res.lab));
          dispatch(handleInputUpdate("tutStats", res.tut));
        })
        .catch(err => {
          console.log(err);
        });
    }

    // dispatch(handleInputUpdate("attendance", ATTENDANCE));
  };
};

export const loadSessionAttendance = (index, date) => {
  return dispatch => {
    PostSessionAttendanceAPI({ index, date })
      .then(res => {
        const { student } = res;
        student.forEach(element => {
          element["index"] = index;
          element["time"] = date;
        });
        dispatch(handleInputUpdate("sessionAttendance", res.student));
        dispatch(handleInputUpdate("openSession", true));
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(date);
    // dispatch(handleInputUpdate("openSession", true));
  };
};

export const overwriteStatus = data => {
  return dispatch => {
    PostOverwriteAPI(data)
      .then(res => {
        if (res.state) {
          return true;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
