import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from'react-router-dom';


class PostsShow extends Component {
  componentDidMount(){
    //props given to us by react-router
    //params is an object that lists all the different wildcard tokens in the url i.e(:id)
  	//this.props.match.params.id
    const { id } = this.props.match.params
  	this.props.fetchPost(id);
  }	


  onDeleteClick(){
  	const { id } = this.props.match.params
  	this.props.deletePost(id, () =>{
  		//Redirects to index page after deleting
  		this.props.history.push("/");
  	});
  }

	render() {
        const { post } = this.props;
          if (!post) {
          return <div>Loading...</div>;
    }


		//posts is the whole list of posts
		//posts[this.props.match.params.id]; //the post we want to show
		//this.props == ownProps 
		return (
		  <div>
		   <Link to="/" className="btn btn-primary"> Back to Index </Link>
		   <button className="btn btn-danger pull-xs-right"
            onClick={this.onDeleteClick.bind(this)}
		   >
		   Delete Post 
		   </button>
		   <h3> {post.title} </h3>
		   <h6> Categories: {post.categories} </h6>
		   <p> {post.content} </p>
		  </div>
		);
	}
}


//posts is the list of posts from the state object(shortcut)
//by convention the second argument is called ownProps which the props object that is going to this current component
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };

}

export default connect(mapStateToProps, { fetchPost, deletePost }) (PostsShow);