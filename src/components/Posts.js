import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <h3>{post.body}</h3>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPosts }
)(Posts);
