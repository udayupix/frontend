import { GET_HOMPOSTS } from "../action/hompsAction";

const hompoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_HOMPOSTS:
      return payload;
    default:
      return state;
  }
};

export default hompoReducer;
