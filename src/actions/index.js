import axios from 'axios';


//API is reduxblog.herukoapp.com
export const FETCH_POSTS ="fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_posts";
export const DELETE_POST = "delete_post";


const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=cyah13";



export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}


//callback function manually trigerred to navigate to root only AFTER posting.
export function createPosts(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(()=> callback());
  
   return {
   	type: CREATE_POST,
    payload:request
   };
}



//Action creator to fetch a particular post using the id
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
	  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
	  .then(()=> callback());

	  return{
	  	type: DELETE_POST,
	  	payload: id
	  }

}