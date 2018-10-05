import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';


class PostsIndex extends Component {
   componentDidMount () {
     this.props.fetchPosts();
   }


	render () {
		console.log(this.props.posts);
		return (
          <div>
            Posts Index 
          </div>
	  );
	}
}


function mapStateToProps(state) {
	return { posts: state.posts };

}


export default connect(null, { fetchPosts: fetchPosts }) (PostsIndex) ;


