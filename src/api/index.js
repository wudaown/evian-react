import axios from "../utils/AxiosPlugin";

export const PostFacialAPI = async params => {
  return await axios.post(`facial/`, params);
};

export const PostLoginAPI = async params => {
  return await axios.post(`login/`, params);
};

export const PostAttendanceAPI = async params => {
  return await axios.post(`attendance/`, params);
};
