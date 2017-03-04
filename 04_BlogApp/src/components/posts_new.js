import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class PostsNew extends Component {
  render(){
    const {fields: {title, categories, content}, handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNew', //does not need to match the component name
  fields: ['title', 'categories','content'] //names of the fields on the form
})(PostsNew); //this will add a the form to the application state with the contents of the fields
