import { GET_CATS } from "../action/catsAction";

const catsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_CATS:
      return payload;

    default:
      return state;
  }
};

export default catsReducer;
