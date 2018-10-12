import _ from "lodash";
import { FETCH_POSTS, FETCH_POST } from "../actions";



//State object was an object where the keys were the id of indiviual posts and the values were the individual posts
//Posts that we want to fetch is in action
export default function(state = {}, action) {
  switch (action.type) {
  
    case FETCH_POST:
  // const post = action.payload.data;
  //    const newState = { ...state, };
  //    newState[post.id] = post;
  // return newState;
  
  //take all the xisting posts we take them out of the state object and put it into this new object we return
  //We are not creating an array, whatever the variable of action.payload.data set it as a key which equals action.payload.data  
  //Essentially addind the new posts to the overall state of the new object
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
