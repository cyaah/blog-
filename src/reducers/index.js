import { combineReducers } from "redux";
import  postReducer  from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
<<<<<<< HEAD
=======

>>>>>>> e51dea6f0ba7b6f99ca1b4ae0e3ad06f571cf1a4

const rootReducer = combineReducers({
  posts: postReducer,
  form: formReducer
});

export default rootReducer;