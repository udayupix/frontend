import posts from "../../services/posts";
import store from "../index";
export var [GET_HOMPOSTS] = ["GET_HOMPOSTS"];

export const get_homposts = () => {
  setTimeout(async () => {
    try {
      const getctts = await posts.homposts();
      store.dispatch({ type: GET_HOMPOSTS, payload: getctts.data });
    } catch (error) {
      console.log(error);
    }
  }, 500);
};
