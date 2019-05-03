import React, { Component } from "react";
import axios from "axios";
import classes from "./Blog.module.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({
        posts: response.data
      });
    });
  }

  render() {
    // Posts
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} />;
    });

    return (
      <div>
        <header>
          <h1>Blogging</h1>
        </header>
        <section className={classes.Posts}>
          {posts}>{posts}
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
