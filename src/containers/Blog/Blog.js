import React, { Component } from "react";

// import axios from "axios";
import axios from "../../axios";

import classes from "./Blog.module.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
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
        this.setState({ error: true });
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

    return (
      <div className={classes.Blog}>
        <header>
          <h1 style={{ color: "Purple" }}>Simple Blogging</h1>
        </header>

        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>

        <section className={classes.Posts}>{posts}</section>

        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>

        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
