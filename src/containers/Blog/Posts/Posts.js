import React, { Component } from "react";
import axios from "../../../axios";

import Post from "../../../components/Post/Post";
import classes from "./Posts.module.css";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    // CONTINUE HERE

    // Limit posts; Add "author" property placeholder b/c jsonplaceholder does not include author data.
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return { ...post, author: "Malone" };
        });

        this.setState({
          posts: updatedPosts
        });
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    this.setState({
      selectedPostId: id
    });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Post Section Error!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return <section className={classes.Posts}>{posts}</section>;
  }
}

export default Posts;
