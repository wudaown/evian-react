import axios from "../utils/AxiosPlugin";

export const PostFacialAPI = async params => {
  return await axios.post(`facial/`, params);
};
