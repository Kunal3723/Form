import { FETCH,CREATE,DELETE } from "../constants/action-Types";



export const infoReducer = (posts = {}, action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => (post._id !== action.payload));
    case FETCH:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};