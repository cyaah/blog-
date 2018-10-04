import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuaoo.com/api';
const API_KEY = '?key=cyah13'


export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);	


	return {
      type: FETCH_POSTS,
      payload: request 
	};
}	