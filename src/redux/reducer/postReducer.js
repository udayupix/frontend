import { GET_POSTS } from "../action/postAction";

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return payload;
    default:
      return state;
  }
};

export default postsReducer;
