import { combineReducers } from 'redux';
import { postReducer } from './reducer_post';


const rootReducer = combineReducers({
  posts: postReducer
});

export default rootReducer;