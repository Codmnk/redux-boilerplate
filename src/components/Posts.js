import React, { Component } from "react";
import propType from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <h4>{post.body}</h4>
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

Posts.propType = {
  fetchPosts: propType.func.isRequired,
  posts: propType.array.isRequired,
  newPost: propType.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.props.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
