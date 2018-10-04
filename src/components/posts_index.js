import React, { Component } from 'react';
import { react } from 'react-redux';
import { fetchPosts } from '../actions';




class PostsIndex extends Component {
  componenetDidMount() {
  	this.props.fetchPosts();
  }

  render() {
  	console.log(this.props.posts);
    return (
      <div>Posts Index</div>
    );
  }
}

function mapStatetoProps(state) {
	return { posts: state.posts };	
}

export default  connect(null, { fetchPosts })(PostsIndex);