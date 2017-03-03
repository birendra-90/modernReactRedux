import React, {Component} from 'react';

class PostsIndex extends Component {
  render(){
    return (
      <div>List of blog posts.</div>
    )
  }

  componentWillMount(){
    console.log('a good time to fetch data')
  }
}

export default PostsIndex;
