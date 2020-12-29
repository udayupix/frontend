import store from "../index";
import posts from "../../services/posts";

export var [GET_CATS] = ["GET_CATS"];

export const get_cats = () => {
  setTimeout(async () => {
    try {
      const getctts = await posts.cats();
      store.dispatch({ type: GET_CATS, payload: getctts.data });
    } catch (error) {
      console.log(error);
    }
  }, 500);
};
