import React, { Component } from "react";
import classes from "./Blog.module.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Blogging</h1>
        </header>
        <section className={classes.Posts}>
          <Post />
          <Post />
          <Post />
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
