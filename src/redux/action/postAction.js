import posts from "../../services/posts";
import store from "../index";
export var [GET_POSTS] = ["GET_POSTS"];

export const get_posts = () => {
  setTimeout(async () => {
    try {
      const getctts = await posts.posts();
      store.dispatch({ type: GET_POSTS, payload: getctts.data });
    } catch (error) {
      console.log(error);
    }
  }, 500);
};
