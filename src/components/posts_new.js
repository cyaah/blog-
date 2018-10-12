import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPosts } from '../actions';



class PostsNew extends Component {
  renderField(field){
    //Basically replaces all field.meta and meta.touched, meta.error so we just need to use meta. We are destructuring
  	const { meta: { touched, error } } = field; 
  	const className = `form-group ${touched && error ? 'has-danger': ''}`



  	//field is essentially a single input or a single piece of state. i.e Field commponent on the bottom
    return (
      <div className = {className} >
        <label>{field.label}</label>
        <input
          className="form-control"
          type = "test"
          //Below basically contains on onCHhange, onHover event handlers etc 
          {...field.input}
        />

          <div className = "text-help">
          {touched ? error: ''}
          </div>
       </div>
    );
//the question mark above (ternary operator) checks if the field has been touched if truthy returns everything between the question mark and colon and if not then returns error as ''
  }


//values is an object that contains the posts title, categories and content 
//this funtion also helps post a new post up the api
onSubmit (values) {
	// this == component
	console.log(values);
     

    //It automatically navigate back to root after posting, its connected to our action creator
	this.props.createPosts(values, () => {
		this.props.history.push('/');
	});
}



  render() {

  	//we got this from the bottom of the code in reduxForm 
  	//Just es6 for const handleSubmt = this.props.handleSubmit
    const{ handleSubmit } = this.props;

  	return (

  		//handleSubmit is the redux-form side of things where we do the validation
  		//Once redux form is ready to be submitted then it calls the function we definded and passes us values out fo the form tow ork with
  		//We use .bind(this) cause we are passing this.onSubmit as a callback function in some different context outside our component
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          //label can be any name eg. labelToShow etc etc
          label="Title"
          name="title"
          component={this.renderField} 
        />
        <Field 
          label="Categories"
          name="categories"
          component={this.renderField}
          />
        <Field 
          label="Post Content"
          name="content"
          component={this.renderField}
          />
          <button type="submit" className="btn btn-primary"> Submit </button>
          <Link to="/" className = "btn btn-danger"> Cancel </Link>

      </form>  
  	);
  }
}


function validate(values){
 //values is all the different values a user enters into the form
 //console.log(values) => { title:'asd', categoies:'asdk', content:'asf'}
 const errors = {};

 //validate the inputs from the value object
if(!values.title || values.title.length < 3) {
	errors.title = "Enter a title longer than 3 characters";
}

// if(values.title.length < 3) {
// 	errors.title = "Title must be atleast 3 characters long";
// }

if(!values.categories){
	errors.categories = "Enter a category"
}

if(!values.content) {
	errors.content = "Enter some content"
}
//if errors is empty, the form is fine to submit
//if errors has any properties, redux form assumes form is invalid
 return errors;
}



export default reduxForm({
	validate: validate,
	form: 'PostsNewForm'
})(
  connect(null, { createPosts })(PostsNew)
);