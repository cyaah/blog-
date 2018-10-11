import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';



class PostsNew extends Component {
  renderField(field){
  	//field is essentially each Field component below
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type = "test"
          //Below basically contains on onCHhange, onHover event handlers etc 
          {...field.input}
        />
       </div>
    );

  }




  render() {
  	return (
      <form>
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
      </form>  
  	);
  }
}

export default reduxForm({
	form: 'PostsNewForm'
}) (PostsNew);